module.exports=function(){

    const db = require(global.common+'/db/mongodb_test.js');

    console.log(db);

    return{
        db:db
    }

}();