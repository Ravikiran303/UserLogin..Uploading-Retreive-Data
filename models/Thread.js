const mongoose = require('mongoose');
const Schema = mongoose.Schema

const OperationSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tags:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
module.exports = Thread = mongoose.model('Threads',OperationSchema);