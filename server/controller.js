module.exports=function(app){
    
    //获取配置，主要用于前后端共享数据
    var config = require('../config.js');
    var service = require('./service');

    //登陆接口
    //返回：登陆信息
    app.post(config.path.login,function(req,res){

        //验证参数
        //console.log(req.body.username);

        //验证密码
        service.isPasswordValid(req.body,function(result){

            if(!result){
                res.json('password wrong!');              
            }else{
                res.json('test');
            }

            return;
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