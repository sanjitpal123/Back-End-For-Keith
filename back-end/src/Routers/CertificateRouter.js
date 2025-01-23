import express from 'express'
import upload from '../Config/multerConfig.js'
import { certificate } from '../Controllers/Homepagedynamic/certificate.js';
const certificateRouter=express.Router();
certificateRouter.post('/post', upload.single('image'), certificate)
export default certificateRouter;