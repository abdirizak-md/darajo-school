import express from "express";
const router = express.Router();
import { protect } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/auth.middleware.js";
router.get(
  "/dashboard",
  protect,
  authorize("admin"),
  (req, res) => {
    res.json({ message: "Welcome Admin" });
  }
);

export default router;