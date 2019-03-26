const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String
    },
    mobile:{
        type:Number,
        maxlength:10
    }
});
module.exports = User = mongoose.model('users',UserSchema);