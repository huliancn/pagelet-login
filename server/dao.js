module.exports=function(){

    const mongodb = require(global.common+'/db/mongodb.js');

    function findPasswordByUserName(username){
        var collection = mongodb.db.collection('user');
        var password = collection.findOne({'username':username});
        return password;
    }

    return{
        mongodb:mongodb,
        findPasswordByUserName:findPasswordByUserName
    }

}();