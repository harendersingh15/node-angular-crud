
let ProfessionalModel=require('../model/professional.model');

class PersonProfessionalDetail 
{

    static saveUser(personid,companyname,depno, callback){

        ProfessionalModel.create({'_id':personid,'companyName':companyname,'deptNo':depno},        (err,result)=>
        {
            if(err)
            {
            
                callback(err, null);

            }
            
            return callback(null, result);

        })
    }
}
module.exports=PersonProfessionalDetail;



