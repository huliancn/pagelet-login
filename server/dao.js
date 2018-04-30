module.exports=function(){

    const db = require(global.common+'/db/mongodb.js');

    console.log(db);

    return{
        db:db
    }

}();