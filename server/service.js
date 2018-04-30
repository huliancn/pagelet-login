module.exports=function(){

    const dao = require('./dao.js');

    function isPasswordValid(){
        console.log(dao);
    }

    return{
        isPasswordValid:isPasswordValid
    }

}();