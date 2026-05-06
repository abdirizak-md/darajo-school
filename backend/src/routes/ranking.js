import express from "express";
import routeRanking from "../modules/ranking/route.js";

const routerRank= express.Router();

routerRank.use("/ranking", routeRanking);

export default routerRank;

