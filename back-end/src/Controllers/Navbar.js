import cloudinary from "../Config/Cloudinary.js";
import fs from 'fs'

export const navbar = async (req, res) => {
    try {
        const {logo}=req.body;
        console.log('body',logo)
       
        if (!req.file) {
            return res.status(400).json({
                message: "No file uploaded",
                success: false
            });
        }

        
        const result = await cloudinary.uploader.upload(req.file.path);
        fs.unlinkSync(req.file.path)

        
        return res.status(200).json({
            message: "Logo uploaded successfully",
            logoUrl: result.secure_url,  
            success: true
        });

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};
