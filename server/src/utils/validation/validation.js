import Joi from "joi" 



const userValidationSchmea = Joi.object({
    username : Joi.string().min(3).max(20).required(),
    email : Joi.string().required(), 
    password: Joi.string().required()
                 
}); 

export default userValidationSchmea; 