
if( typeof(define) == 'undefined'    ){
    var define = function(f){
        module.exports=f();
    }
}

define(function(){
    return {
        cn:{
                USER_NAME_CANNOT_EMPTY:"用户名不能为空！",
                PASSWORD_CANNOT_EMPTY:"密码不能为空",
                CAPTCHA_CANNOT_EMPTY:"验证码不能为空"
        },
        en:{
                USER_NAME_CANNOT_EMPTY:"User Name Can not be empty!",
                PASSWORD_CANNOT_EMPTY:"Password Can not be empty!",
                CAPTCHA_CANNOT_EMPTY:"Captcha Can not be empty!"
        }
    }   
});