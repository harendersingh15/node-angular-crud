let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username: {
        type: String, 
        unique:true,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    mobile: String
    

})
let User = mongoose.model('myuser', userSchema);
module.exports = User;