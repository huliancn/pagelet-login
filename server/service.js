module.exports=function(){

    const dao = require('./dao.js');

    function isPasswordValid(param,callback){
        dao.findPasswordByUserName(param.username,function(data){
            callback(data===param.password);
        })       
    }

    return{
        isPasswordValid:isPasswordValid
    }

}();