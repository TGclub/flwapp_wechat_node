/**
 * author: ACERY1
 * Log Level: trace,debug,info,warn,error
 * 例：debug 等级的 log 只打 debug 以上 level 的 log
 * log 分类:
 * 1. 开发用，trace级别，打到console里 normal
 * 3. 生产环境用，info级别，打日常log normal
 * 4. 生成环境用，error级别，打进文件并发送邮件通知 email
 */

// 该文件被ignore了，请导入自己的smtp账户
import smtpKey from '../keys/smtp.json';

const isDev = process.env.NODE_ENV === 'dev';
const isProd = process.env.NODE_ENV === 'prod';

if (!process.env.NODE_ENV) {
  throw Error('NODE_ENV is not dev or prod');
}

// eslint-disable-next-line
let config = {};

if (isDev) {
  // dev 环境下都打到console里
  config = {
    appenders: {
      normal: {
        type: 'console',
      },
      error: {
        type: 'console',
      },
    },
    replaceConsole: true,
    categories: {
      default: {
        appenders: ['normal'],
        level: 'DEBUG',
      },
      error: {
        appenders: ['error'],
        level: 'ERROR',
      },
    },
  };
}

if (isProd) {
  // prod 环境下打到文件里
  config = {
    appenders: {
      normal: {
        type: 'datefile',
        filename: './logs/log_date/date',
        pattern: '-yyyy-MM-dd.log',
        alwaysIncludePattern: true,
      },
      error: {
        type: 'file',
        filename: './logs/log_error/error.log',
        maxLogSize: 1048576,
        compress: true,
      },
      email: {
        type: '@log4js-node/smtp',
        recipients: 'y841034081@163.com', // 收件人
        sender: 'y841034081@163.com', // 发件人
        subject: '【ERROR】 in Flwapp_Wechat_Node', // 主题
        transport: 'SMTP',
        SMTP: {
          host: 'smtp.163.com',
          port: 25,
          auth: {
            user: smtpKey.user,
            pass: smtpKey.pass,
          },
        },
        // 附件
        attachment: {
          enable: true,
          filename: './logs/log_error/error.log',
          message: 'Error Detail please check attachment below!',
        },
        sendInterval: 10,
      },
    },
    categories: {
      default: {
        appenders: ['normal'],
        level: 'DEBUG',
      },
      error: {
        appenders: ['error'],
        level: 'ERROR',
      },
      email: {
        appenders: ['email'],
        level: 'ERROR',
      },
    },
  };
}
export default config;
