import WechatAPI from 'wechat-api';
import menu from '../keys/menu.json'; // 菜单
import account from '../keys/wechatAccount.json'; // 公众号账号相关keys

// 申请api权限
const api = new WechatAPI(account.appid, account.appsecret);

// 起服务之后就构造菜单
api.createMenu(menu, (err, result) => {
  if (err) {
    throw Error(err);
  }
  console.log('构造菜单成功！', result);
});

export default api;
