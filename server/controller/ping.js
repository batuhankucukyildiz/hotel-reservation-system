

const ping = (request , response ) => {

    response.status(200).json("pong")
}

export default ping;