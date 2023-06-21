import express from "express" 
import {userRegister , userLogin } from "../controller/userController.js";
import ping from "../controller/ping.js"
import auth from "../middleware/auth.js";

// middleaware 
import loginLogger from "../middleware/loginLogger.js";
import errors from "../middleware/error.js";

const route = express() 



route.get("/ping",  ping);
route.post("/register" , errors, loginLogger , userRegister);
route.post("/login" , userLogin);


export default route; 