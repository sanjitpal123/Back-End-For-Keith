import express from 'express'
import { Aboutinhome } from '../Controllers/Homepagedynamic/About.js';
import upload from '../Config/multerConfig.js';
const homeaboutRouter=express.Router();
homeaboutRouter.post('/content',upload.single('image'),Aboutinhome);
export default homeaboutRouter;