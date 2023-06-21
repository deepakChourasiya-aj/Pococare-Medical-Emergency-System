const validRoleAuth = (role)=>{
    return  function(req,res,next){
           if(role.includes(req.body.role)){
            next();
           }else{
            return res.send({msg:"You are not authorized"})
           }
    }
}

module.exports = {
    validRoleAuth
}