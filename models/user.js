const mongoose = require('mongoose');
const User = mongoose.model('User' , {
    name: {
        type : String
    },
    Lastname: {
        type : String
    },
    age: {
        type: Number
    },
    pseudo: {
        type : String
    }
})
module.exports= User;