import express from 'express'
import upload from '../../Config/multerConfig.js'
import { CoreAndprinciple } from '../../Controllers/About/CoreAndPriciple.js';

const CoreAndPricipleRouter=express.Router();
CoreAndPricipleRouter.post('/create', upload.single('image'), CoreAndprinciple);
export default CoreAndPricipleRouter;