const express = require('express');

const personRoutes = express.Router();
const PersonModel = require('../model/person.model');


personRoutes.get('/test', (req, res) => {

    //var person=new personRoutes();
    
    res.send('test person routes');
});


personRoutes.get('/getAllPerson', (req, res) => {
    PersonModel.find({}).lean().exec((error, result)=>{
        res.send(result);
    });
});

personRoutes.post('/createPerson',(req,res) => {
    PersonModel.create({"firstName":"fName", "lastName": "lName", "mobile":"99999999", "age": 99},
    (err,result) => {
        if(err)
        {
            console.log(err);
            res.send(err);
        }
        res.send(result);
    });
});



personRoutes.post('/updateperson', (req, res) => {
    
    let object1={
        "firstName":"dsafsa",
        "lastName":"sharma",
        "mobile":"8871437849",
        "age":"23"
        
        
    };
    
    PersonModel.create(object1,{"firstName":"kamesh","lastName":"sobrajani"},function(err,data){
        if(err)
        {
            console.log(err);
            res.send(err);
        }
        res.send(data);
    });
    
    
});


module.exports = personRoutes;