import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

const TEAMTAILOR_API_URL = "https://api.teamtailor.com/v1";
const TEAMTAILOR_API_TOKEN = process.env.TEAMTAILOR_API_TOKEN;

export default async function handler(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  if (!TEAMTAILOR_API_TOKEN) {
    return NextResponse.json(
      { error: "TEAMTAILOR_API_TOKEN is not set" },
      { status: 401 }
    );
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const teamtailorFormData = new FormData();
    teamtailorFormData.append("file", file, file.name);

    // Step 1: Upload the file to the Teamtailor API
    const uploadResponse = await fetch(`${TEAMTAILOR_API_URL}/files`, {
      method: "POST",
      headers: {
        Authorization: `Token token=${TEAMTAILOR_API_TOKEN}`,
        "X-Api-Version": "20240404",
      },
      body: teamtailorFormData,
    });

    const uploadData = await uploadResponse.json();

    if (!uploadResponse.ok) {
      return NextResponse.json(
        { errors: uploadData.errors || "Unknown error during file upload" },
        { status: uploadResponse.status }
      );
    }

    // Step 2: Use the transient URI to attach the file as an upload
    const transientUri = uploadData.uri;

    const attachUploadResponse = await fetch(`${TEAMTAILOR_API_URL}/uploads`, {
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
    });

    const attachUploadData = await attachUploadResponse.json();

    if (!attachUploadResponse.ok) {
      return NextResponse.json(
        {
          errors:
            attachUploadData.errors || "Unknown error during upload attachment",
        },
        { status: attachUploadResponse.status }
      );
    }

    if (
      attachUploadResponse.status === 201 &&
      attachUploadData.data.attributes.url
    ) {
      return NextResponse.json(
        {
          originalFilename: file.name,
          url: attachUploadData.data.attributes.url,
        },
        {
          status: 201,
        }
      );
    } else {
      return NextResponse.json(
        { error: "Unknown error during upload attachment" },
        { status: attachUploadResponse.status }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
