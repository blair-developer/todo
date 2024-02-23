import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar:{
        type: String,
         default: "https://cdn.iconscout.com/icon/free/png-256/free-avatar-372-456324.png"
    },
}, {timestamps: true }); //mongodb to record extra information like time

const User = mongoose.model('User', userSchema);

export default User;