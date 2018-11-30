/**
 * Router:
 * /click/*
 */
import wechat from 'wechat';
import xml2json from 'xml2json';
import wechatConfig from '../keys/wechatAccount.json';

const router = require('express').Router();

/**
 * /click/donate
 * 点击”捐赠“后请求的路由
 * 获取 openid -> 构造URL -> 返回URL
 */
router.post('/', wechat(wechatConfig, (req, res) => {
  console.log(req.weixin);
  let rawBody = '';
  req.setEncoding('utf8');
  req.on('data', (chunk) => {
    rawBody += chunk;
  });

  req.on('end', () => {
    const data = xml2json.toJson(rawBody);
    // eslint-disable-next-line
    // {"xml":{"ToUserName":"toUser","FromUserName":"FromUser","CreateTime":"123456789","MsgType":"event","Event":"CLICK","EventKey":"EVENTKEY"}}
    console.log(data);
    res.end();
  });
}));

export default router;
