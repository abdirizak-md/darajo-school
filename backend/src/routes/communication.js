import express from "express";
import routerCommunication from "../modules/communication/route.js";

const routersCommunication = express.Router();
routersCommunication.use('/communication', routerCommunication);


export default routersCommunication;
