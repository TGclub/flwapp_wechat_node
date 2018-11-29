// logger 中间件，注入res.logger.[error|normal|email]
import log4js from 'log4js';
import logConfig from '../config/log.config';

log4js.configure(logConfig);

export default (req, res, next) => {
  res.logEmail = log4js.getLogger('email'); // 邮件级 ERROR
  res.logError = log4js.getLogger('error'); // 日志级 ERROR
  res.logNormal = log4js.getLogger('normal'); // 普通日志级 DEBUG
  next();
};
