
import bcrypt from "bcrypt"
import users from "../models/userSchema.js"
import {errorMessages , messages } from "../../public/messages.js"

const userRegister =  async (request , response ) => { 
    const person = request.body 
    const email = person.email
    if (person.password != undefined && person.email != undefined){ 
        try { 

            const existingEmail = await users.findOne({email})
            if (existingEmail) {
                response.status(400).json(errorMessages.registeredUser)
            }
            else{ 
                const hashPassword  = await bcrypt.hash(person.password ,10 )
                person.password = hashPassword 
                await new users(person).save();
                response.status(200).json(messages.successfulRegistration)
            }
        }
        catch(error){ 
            console.log(error)
        }
    }
} 

export default userRegister; 


