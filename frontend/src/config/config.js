import dotenv from "dotenv";

dotenv.config();

export const MONGO_URL = process.env.mongo_url;
export const PORT = process.env.port || 8000;