import express from "express"
import { dbConnection } from "./database/dbconnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/message", messageRouter);
dbConnection();

export default app;