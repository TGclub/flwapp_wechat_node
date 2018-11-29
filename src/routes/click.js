/**
 * Router:
 * /click/*
 */
import wechat from 'wechat';
import wechatAPI from 'wechat-api';
import xml2json from 'xml2json';
const router = require('express').Router();


/**
 * /click
 * 点击”捐赠“后请求的路由
 * 获取 openid -> 构造URL -> 返回URL
 */
router.get('/', (req, res) => {
  // res.logEmail.error('hello world');
  // res.wxAPI.uploadLogo('filepath', (err) => {
  //   res.logError.error(err)
  // } );

  res.write('done');
  res.end();
});
export default router;
