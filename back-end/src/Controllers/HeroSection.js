
import cloudinary from "../Config/Cloudinary.js";
import Heromodel from "../Model/Hero.js";

export const HeroSection=async(req, res)=>{
    try{
        const {content1, content2}=req.body;
        console.log('content',content1, 'content2',content2)
        const video=req.file.path;
        console.log('video',video)
        const uploadvideo=await cloudinary.uploader.upload(req.file.path,{
            resource_type:"video"
        })
        
        const videourl=uploadvideo.secure_url;
        const created=Heromodel.create({
           video:videourl,
           content1:content1,
           content2:content2
        });

        if(created)
        {
            return res.status(201).json({
                message:'Uploded successfully',
                success:true
            })
        }

        return res.status(501).json({
          message:"Can not upload",
          success:false 
        })

    }
    catch(error)
    {
        return res.status(501).json({
            message:"Internal server error",
            success:false
        })
    }
}