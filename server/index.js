
import express from "express" 
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"

//... 
import userRoute from "./src/routes/userRouter.js"
import databaseConnection from "./config/database.js"

dotenv.config()
databaseConnection()
const app = express() 
const PORT = process.env.PORT 
const USER_URL = process.env.USER_URL
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


app.use(USER_URL, userRoute)


export default app; 