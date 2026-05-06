import  express from "express";
import userRoutes from '../modules/user/route.js';



const routerUsers = express.Router();

routerUsers.use("/users", userRoutes);


export default routerUsers;