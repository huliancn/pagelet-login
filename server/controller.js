module.exports=function(app){
    
    //获取配置，主要用于前后端共享数据
    const systemConfig = require('config');
    const config = require('../config');
    const service = require('./service');
    const I18N = require('./i18n')(systemConfig.get('language'));
    const validator = require('validator');

    //登陆接口
    //返回：登陆信息
    app.post(config.path.login,function(req,res,next){

        //验证参数
        //console.log(req.body.username);
        if(validator.isEmpty(validator.trim(req.body.username))){
            return res.json(I18N.USER_NAME_CANNOT_EMPTY)
        }

        if(validator.isEmpty(validator.trim(req.body.password))){
            return res.json('密码不能为空!')
        }

        if(validator.isEmpty(validator.trim(req.body.captcha))){
            return res.json('验证码不能为空!')
        }

        //验证密码
        service.isPasswordValid(req.body,function(err,result){

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