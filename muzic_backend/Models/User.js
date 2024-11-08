const mongoose=require("mongoose");

const User=new mongoose.Schema({
    firstname: {
        type: String,
        required:true,
    },
    password: {
        type: String,
        required:true,
        private:true,
    },
    lastname: {
        type: String,
        required:false,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    likedsongs: {
        type: String,
        default: "",
    },
    likedPlaylist: {
        type: String,
        default: "",
    },
    subscribedArtist: {
        type: String,
        default: "",
    }
});


const UserModel=new mongoose.model("User",User);

module.exports=UserModel;