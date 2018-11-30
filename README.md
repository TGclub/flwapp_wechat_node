# flwapp-wechat-node

**基于express、wechat、wechat-api的公众号二次开发项目。**

### feature

* 输出文件log，可配置邮件报警
* 【todo】获取、存储、回复消息
* 【todo】点击菜单事件的处理
* 【todo】获取数据、图表展示
* ...

### 目录结构

```
.
├── dist // 已添加.gitignore，通过 npm run build 会生成
├── node_modules
└── src
    ├── config 配置
    ├── keys // 已添加.gitignore，请添加相关的敏感数据
        ├── menu.json // 公众号菜单配置
        ├── smtp.json
            ├── user smtp用户名
            └── pass smtp密码
        └── wechatAccount.json 
            ├── token 默认填wechat
            ├── appid 公众号appid
            ├── appsecret 公众号的secret
            └── encodingAESKey
    ├── main 服务启动时加载
    ├── middlewares 中间件
    └── routes 路由
    └── index.js 入口文件
```

### clone

```
$ git clone https://github.com/TGclub/flwapp_wechat_node.git
```

### install

```
$ npm install

or

$ cnpm install
```

### config

配置完成上述文件目录下的keys文件

### run

**开发服务**

```
$ npm run dev
```

**构建**

构建完成之后，构建产物会出现在dist目录

```
$ npm run build
```

**生成环境服务**

```
$ npm run serve
```

**重装依赖**

```
$ npm run refresh
```

**删除log和dist**

```
$ npm run clean-log & npm run clean-dist
```

### middleware 说明&记录

**日志**

具体查看 src/config/log.config.js，方法挂载到一个请求的response下，如

```
res.logEmail // 邮件级 ERROR 发送邮件到指定邮箱并带上本次Error的call stack
res.logError // 日志级 ERROR 将Error上下文输出到文件（按文件大小切分日志）
res.logNormal // 普通日志级 DEBUG 输出基本日志（按日期切分） 
```

使用原则：需要打log才打，不需要就不打。另外，开发环境下的log全部会输出到console。

**wechat-api**

挂载到response的wxAPI下。