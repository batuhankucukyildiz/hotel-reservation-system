

const loginUser = (request , response ) => { 

    console.log(request.body)
    response.status(200).json("okey")

} 

export default loginUser; 