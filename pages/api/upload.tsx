import cors from "cors";
import nc from "next-connect";
import { IncomingForm } from "formidable";
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import FormData from "form-data";
import fetch from "node-fetch";

export const config = {
  api: {
    bodyParser: false,
  },
};

const TEAMTAILOR_API_URL = "https://api.teamtailor.com/v1";
const TEAMTAILOR_API_TOKEN = process.env.TEAMTAILOR_API_TOKEN;

const handler = nc()
  .use(cors())
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    if (!TEAMTAILOR_API_TOKEN) {
      res.status(401).json({ error: "TEAMTAILOR_API_TOKEN is not set" });
      return;
    }

    try {
      const data: any = await new Promise((resolve, reject) => {
        const form = new IncomingForm();
        form.parse(req, (err, fields, files) => {
          if (err) return reject(err);
          resolve({ fields, files });
        });
      });

      const file = data.files.file;

      if (!file) {
        res.status(400).json({ error: "No file uploaded" });
        return;
      }

      const fileStream = fs.createReadStream(file.path);
      const teamtailorFormData = new FormData();
      teamtailorFormData.append("file", fileStream, {
        filename: file.originalFilename,
        contentType: file.mimetype,
      });

      // Step 1: Upload the file to the Teamtailor API
      const uploadResponse = await fetch(`${TEAMTAILOR_API_URL}/files`, {
        method: "POST",
        headers: {
          Authorization: `Token token=${TEAMTAILOR_API_TOKEN}`,
          "X-Api-Version": "20240404",
          ...teamtailorFormData.getHeaders(),
        },
        body: teamtailorFormData,
      });

      const uploadData = await uploadResponse.json();

      if (!uploadResponse.ok) {
        res.status(uploadResponse.status).json({
          errors: uploadData.errors || "Unknown error during file upload",
        });
        return;
      }

      // Step 2: Use the transient URI to attach the file as an upload
      const transientUri = uploadData.uri;

      const attachUploadResponse = await fetch(
        `${TEAMTAILOR_API_URL}/uploads`,
        {
          method: "POST",
          headers: {
            Authorization: `Token token=${TEAMTAILOR_API_TOKEN}`,
            "X-Api-Version": "20240404",
            "Content-Type": "application/vnd.api+json",
          },
          body: JSON.stringify({
            data: {
              type: "uploads",
              attributes: {
                url: transientUri,
                "file-name": file.name,
              },
            },
          }),
        }
      );

      const attachUploadData = await attachUploadResponse.json();

      if (!attachUploadResponse.ok) {
        res.status(attachUploadResponse.status).json({
          errors:
            attachUploadData.errors || "Unknown error during upload attachment",
        });
      }

      res.status(200).json({
        originalFilename: file.name,
        url: attachUploadData.data.attributes.url,
      });
    } catch (error) {
      console.error("Error in file upload:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

export default handler;
