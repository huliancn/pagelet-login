module.exports=function(){

    const dao = require('./dao.js');

    function isPasswordValid(param,next){
        dao.findPasswordByUserName(param.username,function(err,data){
            next(err,data===param.password);
        })       
    }

    return{
        isPasswordValid:isPasswordValid
    }

}();