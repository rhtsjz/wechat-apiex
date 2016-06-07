exports.wechat = {
    appID: 'wx26e0fb0e11a15af4',
    appsecret: 'd4624c36b6795d1d99dcf0547af5443d',
    redirectUri: 'http://huanhuan.rockywu.me/user/auth/callback',
    scopeUserInfo: 'snsapi_userinfo',
    scopeBase: 'snsapi_base',
    token: "rhtsjz",
    grantTypeAuthorizationCode: 'authorization_code',
    oauth2AccessTokenUrl: 'https://api.weixin.qq.com/sns/oauth2/access_token'
};

exports.wechatAuthUrl = function (redirectUri, scope) {
    return 'https://open.weixin.qq.com/connect/oauth2/authorize?'
           + 'appid=' + 'wx26e0fb0e11a15af4'
           + '&redirect_uri=' + redirectUri
           + '&response_type=code'
           + '&scope=' + scope
           + '&state=STATE#wechat_redirect'
}

