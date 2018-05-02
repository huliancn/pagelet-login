module.exports=function(){

    const log = require(global.common+'/log/log4js.js')
    const mongodb = require(global.common+'/db/mongodb.js');

    function findPasswordByUserName(username,callback){

        var collection = mongodb.db.collection('user');

        collection.findOne({'username':username},function(err,data){

            if(err || data===null){
                log.server.error(err);
                callback(null);
                return;
            }

            callback(data.value);

        });

    }

    return{
        mongodb:mongodb,
        findPasswordByUserName:findPasswordByUserName
    }

}();