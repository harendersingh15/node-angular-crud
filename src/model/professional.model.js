const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProfessionalSchema = new Schema({
  
    companyName: {
        type: String,
        required: true
    },

    deptNo: {
        type: String,
        required: true
    },


})

const ProfessionalModel = mongoose.model('Professional', ProfessionalSchema, 'Professional'); //actual model is created here to write into db

module.exports = ProfessionalModel;