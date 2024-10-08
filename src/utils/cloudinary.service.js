import {v2 as cloudinary} from "cloudinary"
import { response } from "express";
import fs from "fs"


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

//uploading method --from localpath 
const uploadOnCloud = async (localFilePath) => {
    try {
if (!localFilePath) return null;
        const Uploadresponse = await cloudinary.uploader.upload(localFilePath, {
        resource_type : "auto"
    });
    //uploading
    console.log("Uploaded",Uploadresponse.url);
    return Uploadresponse
    } catch (error) {
        fs.unlinkSync(localFilePath) //removing malcious files
    }
}

export { uploadOnCloud }