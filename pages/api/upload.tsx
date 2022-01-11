import cors from "cors";
import nc from "next-connect";
import { IncomingForm } from "formidable";
import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "@sanity/client";
import { createReadStream, ReadStream } from "fs";

const client = sanityClient({
  projectId: "dp4k3mpw",
  dataset: "production",
  token: process.env.SANITY_API_TOKEN,
  useCdn: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc()
  .use(cors())
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    const data: any = await new Promise((resolve, reject) => {
      const form = new IncomingForm();
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

    if (data.files.file.path) {
      const filePath = data.files.file.path;
      const readStream: ReadStream = createReadStream(filePath);
      const stream: ReadableStream = (readStream as unknown) as ReadableStream;

      client.assets
        .upload("file", stream, {
          filename: data.files.file.name,
        })
        .then((fileAsset) => {
          res.status(200).json(fileAsset);
        })
        .catch((e) => {
          res.status(400).json({ errors: e });
        });
    }
  });

export default handler;
