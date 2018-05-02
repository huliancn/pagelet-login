module.exports=function(){

    const dao = require('./dao.js');

    function isPasswordValid(param,callback){
        dao.findPasswordByUserName(param.username,function(err,data){
            callback(err,data===param.password);
        })       
    }

    return{
        isPasswordValid:isPasswordValid
    }

}();