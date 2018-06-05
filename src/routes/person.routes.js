const express = require('express');

const personRoutes = express.Router();
const PersonModel = require('../model/person.model');
const ProfessionalModel=require('../repository/professional-detail');



personRoutes.get('/test', (req, res) => {
    res.send('test person routes');
});

personRoutes.get('/getAllPerson', (req, res) => {
    PersonModel.find({}).lean().exec((error, result)=>{
        res.send(result);
    });
});




personRoutes.post('/createPerson',(req,res) => {


    let obj = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        mobile : req.body.mobile,
        age : req.body.age

    }
    const companyName = req.body.companyName;
    const deptNo = req.body.deptNo;


    let data = new PersonModel(obj);
    data.save((error, result)=>{
        if(error){
            return res.status(500).send(error);
        }
      ProfessionalModel.saveUser(result._id,companyName,deptNo, (error, cbResult)=>{
         if(error){
          return res.status(500).send(error);
             
         }

         
         result = result.toObject();

         

         //logic to combine the result personDetail + cbResult
         result["companyName"]=cbResult.companyName;
         result["deptNo"]=cbResult.deptNo;
 delete result._id;
// let object1={
//     "_id":cbResult._id
//     "name":result.
// }

    console.log(result);
         res.send(result);
         
     });  
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

personRoutes.post('/updatePerson', (req, res) => {
    let id = req.body.id;
    let firstName=req.body.firstName;

    PersonModel.updateOne({ _id:id }, { firstName:firstName },
        (err, result) => {
            if(err){
            console.log();}
           
           
            res.send(result);

            

        })
        
        
});
personRoutes.post('/createPersonField',(req,res) => {})

module.exports = personRoutes;