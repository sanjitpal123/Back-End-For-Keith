import express from 'express';

import upload from '../Config/multerConfig.js';
import { navbarlogo } from '../Controllers/Homepagedynamic/Navbar.js';
const navbarrouter=express.Router();
navbarrouter.post('/logo', upload.single('logo'), navbarlogo)
export default  navbarrouter;