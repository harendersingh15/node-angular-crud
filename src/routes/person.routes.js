const express = require('express');

const personRoutes = express.Router();
const PersonModel = require('../model/person.model');



personRoutes.get('/test', (req, res) => {
    res.send('test person routes');
});

personRoutes.get('/getAllPerson', (req, res) => {
    PersonModel.find({}).lean().exec((error, result)=>{
        res.send(result);
    });
});




personRoutes.post('/createPerson',(req,res) => {
    console.log(req.body);
    let obj = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        mobile : req.body.mobile,
        age : req.body.age

    }

    let data = new PersonModel(obj);
    data.save((error, result)=>{
        if(error){
            return res.status(500).send(error);
        }
        res.send(result);
    });
});

personRoutes.post('/delete',(req,res) => {
    let id = req.body.id;
    PersonModel.findByIdAndRemove({_id: id}).exec((error, result)=>{
        if(error){
            return res.status(500).send(error);
        }
        res.send(result);

    });
})



module.exports = personRoutes;