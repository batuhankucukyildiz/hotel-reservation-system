import express from "express" 
import userRegister from "../controller/userController.js";
import ping from "../controller/ping.js"
import auth from "../middleware/auth.js";

// middleaware 
import loginLogger from "../middleware/loginLogger.js";

const route = express() 



route.get("/ping" , ping)
route.get("/login" , loginLogger , userRegister) 


export default route; 