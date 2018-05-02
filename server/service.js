module.exports=function(){

    const dao = require('./dao.js');

    function isPasswordValid(param,callback){
        dao.findPasswordByUserName(param.username,function(data){
            console.log(data);
            callback(false);
        })       
    }

    return{
        isPasswordValid:isPasswordValid
    }

}();