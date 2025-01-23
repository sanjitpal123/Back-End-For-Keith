import express from 'express'
import cloudinary from "../../Config/Cloudinary.js";
import fs from 'fs'
import certificatemodel from '../../Model/homepage/Certificate.js';


export const certificate=async (req , res)=>{
    try{
      const {description, title}=req.body;
      const uploaded=await cloudinary.uploader.upload(req.file.path);
      fs.unlinkSync(req.file.path);
       
        const created=await certificatemodel.create({
            description:description,
            title:title,
            image:uploaded.secure_url
        })
        if(created)
        {
            return res.status(201).json({
                message:'Certificate is uploaded successfully',
                created,
                success:true,

            })
        }
        return res.status(401).json({
            message:'Can not uploded ',
            success:false
        })


    }
    catch(error)
    {
        return res.status(501).json({
            message:'Internal server error ',
            success:false
        })
    }
}