import mongoose from "mongoose";
import express from "express";
import userrouter from "./userRouter.js";
import navbarrouter from "./NavabrRouter.js";
import HeroRouter from "./HeroRouter.js";
import homeaboutRouter from "./AboutHome.js";
import backroundimageofyearRouter from "./backroundImageRouter.js";
import PrdouctRouter from "./ProductRouter.js";
import managementRouter from "./ManagementRouter.js";
const apirouter=express.Router();
apirouter.use('/user',userrouter);
apirouter.use('/navbar',navbarrouter);
apirouter.use('/hero',HeroRouter);
apirouter.use('/homeabout',homeaboutRouter);
apirouter.use('/backroundimage',backroundimageofyearRouter);
apirouter.use('/product',PrdouctRouter);
apirouter.use('/management',managementRouter)
export default apirouter;