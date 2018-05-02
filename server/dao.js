module.exports=function(){

    const log = require(global.common+'/log/log4js.js')
    const mongodb = require(global.common+'/db/mongodb.js');

    function findPasswordByUserName(username,callback){
        var collection = mongodb.db.collection('user');
        collection.find({'username':username}).toArray(function(err,data){

            log.app.info('----call back')

            if(err){
                console.log(err);
                return;
            }

            callback(data.value);

        });

        log.app.info('----')
    }

    return{
        mongodb:mongodb,
        findPasswordByUserName:findPasswordByUserName
    }

}();