import logger from "../../config/logger.js";

const loginLogger = async ( request , response , next ) =>  {
    logger.info(request.body)
    next(); 
}


export default loginLogger; 