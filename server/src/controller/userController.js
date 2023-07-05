import bcrypt from "bcrypt";
import users from "../models/userSchema.js";
import { appMessages } from "../../public/messages.js";
import {
  registerValidationSchmea,
  loginValidationSchmea,
} from "../utils/validation/validation.js";

const userRegister = async (request, response) => {
  const person = request.body;
  const email = person.email;
  const isValidate = registerValidationSchmea.validate(person);
  if (!isValidate.error) {
    if (person.password != undefined && person.email != undefined) {
      try {
        const existingEmail = await users.findOne({ email });
        if (existingEmail) {
          response.status(400).json(appMessages.error.registeredUser);
        } else {
          const hashPassword = await bcrypt.hash(person.password, 10);
          person.password = hashPassword;
          await new users(person).save();
          response.status(200).json(appMessages.http.successfulRegistration);
        }
      } catch (error) {
        console.log(error);
      }
    }
  } else {
    /**
     * @param validasyon
     */
    response.status(400).json(appMessages.error.missing);
  }
};

const userLogin = async (request, response) => {
  try {
    const userDetail = request.body;
    const isValidate = loginValidationSchmea.validate(userDetail);
    if (!isValidate.error) {
      const email = userDetail.email;
      const existingUser = await users.findOne({ email });
      existingUser
        ? response.status(200).json(existingUser._id)
        : response.status(400).json(appMessages.error.userNotFound);
    } else {
      response.status(400).json(appMessages.error.missing);
    }
  } catch (error) {
    console.log(error);
  }
};

const userDelete = async (request, response) => {
  const user = request.body;
  console.log(user);
  response.status(200).json("error.missing");
};

export const personController = {
  userRegister,
  userLogin,
  userDelete,
};

// burda export const personcontroller yapılacak index js de tekrar export edilecek.
