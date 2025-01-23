
import cloudinary from "../../Config/Cloudinary.js";

import Coreandprinciple from "../../Model/Aboutpage/CoreAndPriciple.js";
import fs from 'fs'
export const CoreAndprinciple=async (req , res)=>{
    try{
        const {title , description}=req.body;
         if(!title || !description || ! req.file.path)
         {
            return res.status(501).json({
                message:'fill all the field'
            })
         }
         const uploaded=await cloudinary.uploader.upload(req.file.path);
         fs.unlinkSync(req.file.path);

         if(!uploaded)
         {
            return res.status(401).json({
                message:'Can not upload'
            })
         }

          const created=await Coreandprinciple.create({
            title:title,
            description:description,
            image:uploaded.secure_url
          })
         if(created)
         {
            return res.status(201).json({
                message:'Created successfully',
                created,
                success:true,

            })
         }
    }catch(error)
    {
        return res.status(501).json({
            message:'internal server error'
        })
    }
}