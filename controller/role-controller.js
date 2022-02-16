
const RoleModel=require("../model/role-model");


module.exports.addRole=function(req,res){
    //db inseert role
    console.log(req.body.roleName);
   
    let role=new RoleModel({
        roleName:req.body.roleName
    })
    role.save(function(err,success){
        if(err){
            res.json({msg:"shw",status:-1,data:req.body})
        }else{
            res.json({msg:"role added",status:200,data:success})
        }
    })
   
}

//roleName