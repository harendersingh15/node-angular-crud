
let ProfessionalModel=require('../model/professional.model');

class PersonProfessionalDetail 
{

    static saveUser(personid,companyname,depno){

        ProfessionalModel.create({'_id':personid,'companyName':companyname,'deptNo':depno},
        (err,result)=>
        {
            if(err)
            {
            
                return err;

            }
            
            return result;

        });
    }
}
module.exports=PersonProfessionalDetail;



