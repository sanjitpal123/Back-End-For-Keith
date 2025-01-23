import express from 'express';
import { navbar } from '../Controllers/Navbar.js';
import upload from '../Config/multerConfig.js';
const navbarrouter=express.Router();
navbarrouter.post('/logo', upload.single('logo'), navbar)
export default  navbarrouter;