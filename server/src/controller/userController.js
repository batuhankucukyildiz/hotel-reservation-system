import users from "../models/userSchema.js"

const loginUser =  async (request , response ) => { 
    const person = request.body 
    console.log(request.body)
    response.status(200).json("okey")
    await new users(person).save();

} 




export default loginUser; 


