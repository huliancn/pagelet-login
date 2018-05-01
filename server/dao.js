module.exports=function(){

    const db = require(global.common+'/db/mongodb.js');

    function findPasswordByUserName(username){
        var collection = db.collection('user');
        return 'password';
    }

    return{
        db:db,
        findPasswordByUserName:findPasswordByUserName
    }

}();