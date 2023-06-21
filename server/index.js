
import express from "express" 
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"

//... 
import route from "./src/routes/routes.js"
import databaseConnection from "./config/database.js"

dotenv.config()
databaseConnection()
const app = express() 
const PORT = process.env.PORT 
const BASE_URL = process.env.BASE_URL
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`${PORT} , portunda çalışıyor.`)
 })


app.use(BASE_URL, route)
