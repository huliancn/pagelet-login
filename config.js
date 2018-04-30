
var component_name={component_name};

if( typeof(define) == 'undefined'    ){
    var define = function(f){
        module.exports=f();
    }
}

define(function (){

    var config={
        name:component_name,
        path:{
            login:"/"+component_name+"/login",
            captcha:"/"+component_name+"/captcha"
        }
    };
    return config;

});