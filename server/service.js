module.exports=function(){

    const dao = require('./dao.js');

    function isPasswordValid(param){
        var password = dao.findPasswordByUserName(param.username)
        console.log(password);
    }

    return{
        isPasswordValid:isPasswordValid
    }

}();