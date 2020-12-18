## 一、小程序自动化方案
### 1、整体流程
- 采用官方提供的 `miniprogram-ci` 解决小程序上传和预览，以及获取最近上传版本的 sourceMap。
- 采用 `github action` 解决自动构建。

### 2、miniprogram-ci 的相关配置
#### （1）密钥及 IP 白名单配置
    访问 `"微信公众平台-开发-开发设置"` 后下载代码上传密钥，并配置 IP 白名单。Github IP 不定，可选择关闭白名单。
#### （2）项目安装依赖
```
npm install miniprogram-ci --save
```
#### （3）编写构建脚本
```js
const ci = require('miniprogram-ci')
const pkg = require('./package.json')
function envDeal(env){
  switch(env) {
    case 'production': return {env: '生产环境', robot: 1};
    case 'development': return {env: '开发环境', robot: 2};
    case 'release': return {env: '测试环境', robot: 3};
    default: break;
  }
}
;(async () => {
  const project = new ci.Project({
    appid: 'wxc326b824cc3d1077',
    type: 'miniProgram',
    projectPath: './dist',
    privateKeyPath: './private.key',
    ignores: ['node_modules/**/*'],
  })
  try {
    await ci.preview({
      project,
      robot: envDeal(process.env.HOTEL_APP_ENV).robot,
      desc: `零壹酒店 / ${process.env.HOTEL_APP_ENV} ${envDeal(process.env.HOTEL_APP_ENV).env} / 版本号: V${pkg.version}`, // 此备注将显示在“小程序助手”开发版列表中
      setting: {
        es6: true,
      },
      qrcodeFormat: 'image',
      qrcodeOutputDest: 'qrcode/preview-qrcode.jpg',
      onProgressUpdate: console.log,
      // pagePath: 'pages/index/index', // 预览页面
      // searchQuery: 'a=1&b=2',   // 预览参数 [注意!]这里的`&`字符在命令行中应写成转义字符`\&`
    })
  } catch (err) {
    console.log('err', err)
  }
})()
```

