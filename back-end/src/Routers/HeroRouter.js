import express from 'express';
import upload from '../Config/multerConfig.js';
import { HeroSection } from '../Controllers/Homepagedynamic/HeroSection.js';

const HeroRouter=express.Router();
HeroRouter.post('/herovideo', upload.single('video'), HeroSection)
export default HeroRouter;