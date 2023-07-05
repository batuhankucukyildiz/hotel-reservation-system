import express from "express";
// import {userRegister , userLogin , userDelete } from "../controller/userController.js";
import ping from "../controller/ping.js";
import auth from "../middleware/auth.js";
import { controller } from "../controller/index.js";
// middleaware
import loginLogger from "../middleware/loginLogger.js";
import errors from "../middleware/error.js";

const userRoute = express();

userRoute.get("/ping", ping);
userRoute.post(
  "/register",
  errors,
  loginLogger,
  controller.personController.userRegister
);
userRoute.post("/login", controller.personController.userLogin);
userRoute.delete("/delete/:id", controller.personController.userDelete);

export default userRoute;
