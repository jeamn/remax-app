const ci = require('miniprogram-ci')
const pkg = require('./package.json')
function envDeal(env){
  switch(env) {
    case 'production': return '生产环境';
    case 'development': return '开发环境';
    case 'release': return '测试环境';
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
      robot: 2,
      desc: `零壹酒店 ${process.env.HOTEL_APP_ENV} ${envDeal(process.env.HOTEL_APP_ENV)}/ ${pkg.version}`, // 此备注将显示在“小程序助手”开发版列表中
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
