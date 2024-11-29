import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
        .connect(
            process.env.MONGO_URI,
            { dbName: "updated-event-booking-app" })
        .then(() => {
            console.log("Connected to database!");
        })
        .catch((err) => {
            console.log("Some error occured while connecting to database:", err);
        });
};