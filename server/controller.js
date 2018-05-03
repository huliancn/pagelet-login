module.exports=function(app){
    
    //容器配置
    const systemConfig = require('config');
    const I18N = require('../i18n').cn;

    //获取配置，主要用于前后端共享数据
    const config = require('../config');
    const service = require('./service');
    const validator = require('validator');

    //登陆接口
    //返回：登陆信息
    app.post(config.path.login,function(req,res,next){

        var username = validator.trim(req.body.username);
        var password = validator.trim(req.body.password);
        var captcha = validator.trim(req.body.captcha);

        //验证参数
        if(validator.isEmpty(username)){
            return res.json(I18N.USER_NAME_CANNOT_EMPTY)
        }

        if(validator.isEmpty(password)){
            return res.json(I18N.PASSWORD_CANNOT_EMPTY)
        }

        if(validator.isEmpty(captcha)){
            return res.json(I18N.CAPTCHA_CANNOT_EMPTY)
        }

        //验证密码
        service.isPasswordValid(username,password,function(err,result){

            if(err){
                return next(err);
            }

            if(!result){
                return res.json(result);            
            }
            
            return res.json('success');

        });

        //创建会话

        //登陆成功：返回用户信息

        //登陆失败：返回错误信息
       // console.log('1111')
       // res.json('end');
    })

    //名称：验证码接口
    //描述：生成验证码信息
    //返回：验证码图片
    app.get(config.path.captcha,function(req,res){

        //调用第三方库，生成验证码信息
        var captcha = require('svg-captcha');
        var data = captcha.create();

        //保存验证码
        //console.log('captcha:'+data.text);

        //返回SVG格式验证码图片
        res.type('svg')
        res.send(data.data);
    })

};