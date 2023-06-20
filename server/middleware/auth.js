

const auth = (request , response , next) => {
   console.log("auth is running")
    next();
}

export default auth; 