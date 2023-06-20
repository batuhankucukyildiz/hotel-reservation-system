
import express, { json } from "express" 
import dotenv from "dotenv"
import route from "../server/routes/routes.js"

import bodyParser from "body-parser"
import cors from "cors"

dotenv.config()
const app = express() 
const PORT = process.env.PORT 
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


app.use("/api/v1" , route )
