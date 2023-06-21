import Joi from "joi" 



const registerValidationSchmea = Joi.object({
    username : Joi.string().min(3).max(20).required(),
    email : Joi.string().required(), 
    password: Joi.string().required()
                 
}); 

const loginValidationSchmea = Joi.object({
    email : Joi.string().required(), 
    password: Joi.string().required()
})

export {
    registerValidationSchmea, 
    loginValidationSchmea 
} 