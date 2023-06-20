import express from "express" 
import loginUser from "../controller/userController.js";


const route = express() 


route.get("/login" , loginUser) 


export default route; 