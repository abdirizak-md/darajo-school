
import express from "express";
import  routerEntryMark  from "../modules/marksEntry/route.js";

const routersEntryMark = express.Router();
routersEntryMark.use('/marks-entry', routerEntryMark);



export default routersEntryMark;
