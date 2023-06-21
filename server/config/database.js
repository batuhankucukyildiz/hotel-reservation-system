import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const databaseUsername = process.env.DB_USERNAME;
const databasePassword = process.env.DB_PASSWORD;

const databaseConnection = async () => {
  const URL = `mongodb+srv://${databaseUsername}:${databasePassword}@cluster0.mcgaypv.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("connection true");
  } catch (error) {
    console.log("db connection issue", error);
  }
};

export default databaseConnection;
