import  express from 'express'
import { Whykeith } from '../../Controllers/About/whyKeith.js';
const whykeithRouter=express.Router();
whykeithRouter.post('/create',Whykeith);
export default whykeithRouter;