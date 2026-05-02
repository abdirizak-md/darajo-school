import express from "express";

import  routeStructure from "../modules/feeStructure/route.js";

const routerStructures = express.Router();
routerStructures.use("/feeStructures", routeStructure);

export default routerStructures;