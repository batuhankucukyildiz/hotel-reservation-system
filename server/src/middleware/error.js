import { appMessages } from "../../public/messages.js"

const errors = async (request , response , next ) => { 
    const isEmpty = Object.keys(request.body).length === 0 && request.body.constructor === Object;    
    isEmpty === true ? response.status(400).json(appMessages.error.bodyEmpty) : next()
    
}
export default errors; 