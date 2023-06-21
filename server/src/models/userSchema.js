import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {   
        email: String, 
        username: String, 
        password: String, 
        createdAt: {
        type: Date,
        default: Date.now
        }
        
    }
);

const users = mongoose.model("user", userSchema);

export default users;













