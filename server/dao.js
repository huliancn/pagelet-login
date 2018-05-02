module.exports=function(){

    const log = require(global.common+'/log/log4js.js')
    const mongodb = require(global.common+'/db/mongodb.js');

    function findPasswordByUserName(username,callback){

        mongodb.getDb('test',function(err,db){

            if(err){
                return callback(err);
            }

            db.collection('user').findOne({'username':username},function(err,data){

                if(err){
                    log.server.error(err);
                    return callback(err);                 
                }

                if(data===null){
                    callback(null);
                    return;
                }
    
                return callback(null,data.username);
    
            });
        });



    }

    return{
        mongodb:mongodb,
        findPasswordByUserName:findPasswordByUserName
    }

}();