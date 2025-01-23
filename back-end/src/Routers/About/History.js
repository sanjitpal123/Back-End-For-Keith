import express from "express";

import { Histroy } from "../../Controllers/About/History.js";
const HistoryRouter=express.Router();
HistoryRouter.post('/create',Histroy);
export default HistoryRouter;