import express from 'express'
import upload from '../Config/multerConfig.js';
import { backimageofyearsection } from '../Controllers/Homepagedynamic/backroundimageofyearsection.js';
const backroundimageofyearRouter=express.Router();
backroundimageofyearRouter.post('/backroundimage',upload.single('image'),backimageofyearsection);
export default backroundimageofyearRouter;