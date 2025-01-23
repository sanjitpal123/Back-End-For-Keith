import cloudinary from "../../Config/Cloudinary.js"
import fs from 'fs'
import navbar from "../../Model/homepage/Navbar.js"

export const navbarlogo = async (req, res) => {
    try {
        const {logo}=req.body;
        console.log('body',logo)
       
        if (!req.file) {
            return res.status(400).json({
                message: "No file uploaded",
                success: false
            });
        }

        const existing=await navbar.findOne();
        console.log('exisiting',existing)

        if(existing)
        {
            const result = await cloudinary.uploader.upload(req.file.path);
             fs.unlinkSync(req.file.path)

             const updated=navbar.findByIdAndUpdate(existing._id,{
                logo:result.secure_url
             },{ new: true })
        
        }
        
        const result = await cloudinary.uploader.upload(req.file.path);
        fs.unlinkSync(req.file.path)
        const navlogo=await navbar.create({
            logo:result.secure_url
        })

        
        return res.status(200).json({
            message: "Logo uploaded successfully",
            navlogo,  
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
