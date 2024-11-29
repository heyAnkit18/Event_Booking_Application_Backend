import express from "express"
import { dbConnection } from "./database/dbconnection.js";

const app=express();
dbConnection();
export default app;