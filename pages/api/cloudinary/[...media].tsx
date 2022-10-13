import {
  mediaHandlerConfig,
  createMediaHandler,
} from "next-tinacms-cloudinary/dist/handlers";

// import { isAuthorized } from "@tinacms/auth";

export const config = mediaHandlerConfig;
// console.log("config:", config);

export default createMediaHandler({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  authorized: async (req, _res) => {
    // console.log("req", req, process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT);
    try {
      if (process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT) return true;

      return true;
      // req has no client id or a token to auth with the cms.
      // const user = await isAuthorized(req);
      // console.log("user", { user });

      // return user && user.verified;
    } catch (e) {
      console.error(e);
      return false;
    }
  },
});
