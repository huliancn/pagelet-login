module.exports=function(){

    const log = require(global.common+'/log/log4js.js')
    const mongodb = require(global.common+'/db/mongodb.js');

    function findPasswordByUserName(username,next){

        mongodb.getDb('test',function(err,db){

            if(err){
                return next(err);
            }

            db.collection('user').findOne({'username':username},function(err,data){

                if(err){
                    log.server.error(err);
                    return next(err);                 
                }

                if(data===null){
                    next(null);
                    return;
                }
    
                return next(null,data.username);
    
            });
        });



    }

    return{
        mongodb:mongodb,
        findPasswordByUserName:findPasswordByUserName
    }

}();