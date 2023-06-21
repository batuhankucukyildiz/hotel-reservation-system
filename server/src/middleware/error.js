import { appMessages } from "../../public/messages.js"

const errors = async (request , response , next ) => { 

    request.body.lengt === undefined ? response.status(400).json(appMessages.error.bodyEmpty) : next()

}
export default errors; 