import mongoose from "mongoose";

export const dbConnection = () => {
    const dbURI = "mongodb+srv://ankitkumarjune18:ankitjune18@updated-event-booking-a.0977i.mongodb.net/?retryWrites=true&w=majority&appName=updated-event-booking-app";

    mongoose
        .connect(dbURI, { dbName: "updated-event-booking-app" })
        .then(() => {
            console.log("Connected to the database!");
        })
        .catch((err) => {
            console.error("Error connecting to the database:", err.message);
        });
};
