import express from "express" 
import loginUser from "../controller/userController.js";
import ping from "../controller/ping.js"
import auth from "../middleware/auth.js";
const route = express() 



route.get("/ping" , ping)
route.get("/login" , auth , loginUser) 


export default route; 