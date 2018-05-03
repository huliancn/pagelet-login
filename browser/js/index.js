//定义AMD模块
define(['jquery','validator', '../../config.js','../../i18n.js'], function ($,validator,config,i18n) {

    const I18N = i18n.cn;

    //刷新验证码
    $('#pagelet-login-captcha-refresh').click(function () {
        $('#pagelet-login-captcha-img').attr('src', config.path.captcha + '?t=' + Date.now());
    });
    $('#pagelet-login-captcha-img').click(function () {
        this.src = config.path.captcha + '?t=' + Date.now();
    });

    //Form提交
    $('#pagelet-login-submit').click(function () {

        $('#pagelet-login .info').text('');
        var username = validator.trim($('#pagelet-login-username').val());
        var password = validator.trim($('#pagelet-login-password').val());
        var captcha = validator.trim($('#pagelet-login-captcha').val());

        //根据配置控制是否需要前端参数验证，方便于测试后端验证是否缜密
        if(config.validation==='both'){
            
            if (validator.isEmpty(username)){
                $('#pagelet-login .info').text(I18N.USER_NAME_CANNOT_EMPTY)
                return;
            }

            if (validator.isEmpty(password)) {
                $('#pagelet-login .info').text(I18N.PASSWORD_CANNOT_EMPTY)
                return;
            }

            if (validator.isEmpty(captcha)) {
                $('#pagelet-login .info').text(I18N.CAPTCHA_CANNOT_EMPTY)
                return;
            }
        }

        $.post({
            url: config.path.login,
            data: { username: username, password: password, captcha: captcha },
            success: function (data) {
                alert(data);
            }
        });

    });

    //忘记密码
    $('#pagelet-login .forget-password').click(function () {
        alert('功能未实现！');
    });


});