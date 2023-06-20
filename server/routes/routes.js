import express from "express" 
import loginUser from "../controller/userController.js";
import ping from "../controller/ping.js"

const route = express() 



route.get("/ping" , ping)
route.get("/login" , loginUser) 


export default route; 