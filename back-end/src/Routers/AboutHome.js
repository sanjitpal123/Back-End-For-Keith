import express from 'express'
import { Aboutinhome } from '../Controllers/Homepagedynamic/About.js';
const homeaboutRouter=express.Router();
homeaboutRouter.post('/content',Aboutinhome);
export default homeaboutRouter;