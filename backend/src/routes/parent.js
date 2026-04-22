    import express from "express";
    import parentRoute from '../modules/parents/route.js'

    const ParentRouter = express.Router();

    // mount route
    ParentRouter.use("/parents", parentRoute);
    export default ParentRouter;