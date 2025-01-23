import express from "express";
import upload from "../Config/multerConfig.js";
import { Management } from "../Controllers/Homepagedynamic/management.js";


const managementRouter=express.Router();

managementRouter.post('/create', upload.single('image'), Management);

export default  managementRouter;