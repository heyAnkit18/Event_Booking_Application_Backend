import express from "express"
import { dbConnection } from "./database/dbconnection.js";
import dotenv from "dotenv";

const app = express();
dotenv.config({ path: "./config/config.env" });
dbConnection();

export default app;