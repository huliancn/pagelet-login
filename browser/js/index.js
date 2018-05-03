//定义AMD模块
define(['jquery', '../../config.js','../../i18n.js'], function ($,config,i18n) {

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

        $('.info').text('');
        var username = $('#pagelet-login-username').val();
        var password = $('#pagelet-login-password').val();
        var captcha = $('#pagelet-login-captcha').val();

        if(config.validation==='both'){
            
            if (username === null || username === '') {
                $('#pagelet-login .info').text(I18N.USER_NAME_CANNOT_EMPTY)
                return;
            }

            if (password === null || password === '') {
                $('#pagelet-login .info').text('密码不能为空！')
                return;
            }

            if (captcha === null || captcha === '') {
                $('#pagelet-login .info').text('验证码不能为空！')
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