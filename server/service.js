module.exports=function(){

    const dao = require('./dao.js');

    function isPasswordValid(username,password,next){
        dao.findPasswordByUserName(username,function(err,data){
            next(err,data===password);
        })       
    }

    return{
        isPasswordValid:isPasswordValid
    }

}();