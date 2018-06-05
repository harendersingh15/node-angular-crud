const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mobile: String,
    age: Number
})

const PersonModel = mongoose.model('Person', PersonSchema, 'Person'); //actual model is created here to write into db

module.exports = PersonModel;