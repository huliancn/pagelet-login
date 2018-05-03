module.exports=function(language){

    switch (language) {
        case 'cn':
            return {
                "USER_NAME_CANNOT_EMPTY":"用户名不能为空！"
            }
        break;
        case 'en':
            return {
                "USER_NAME_CANNOT_EMPTY":"User Name Can not be empty!"
            }
        break;           
    
        default:
            break;
    }
    

};