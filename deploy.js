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
  const envConfig = envDeal(process.env.HOTEL_APP_ENV)
  const isProd = process.env.HOTEL_APP_ENV === 'production'
  try {
    await ci.preview({
      project,
      robot: envConfig.robot,
      desc: `零壹酒店 / ${process.env.HOTEL_APP_ENV} ${envConfig.env} / 版本号: V${pkg.version}`, // 此备注将显示在“小程序助手”开发版列表中
      setting: {
        es6: true,
      },
      qrcodeFormat: 'image',
      qrcodeOutputDest: 'qrcode/preview-qrcode.jpg',
      onProgressUpdate: console.log,
      // pagePath: 'pages/index/index', // 预览页面
      // searchQuery: 'a=1&b=2', // 预览参数 [注意!]这里的`&`字符在命令行中应写成转义字符`\&`
    })
    if(isProd){
      await ci.upload({
        project,
        version: `${pkg.version}`,
        desc: '零壹酒店',
        setting: {
          es6: true,
        },
        onProgressUpdate: console.log,
      })
      await ci.getDevSourceMap({
        project,
        robot: envConfig.robot,
        sourceMapSavePath: './sm.zip'
      })
    }
  } catch (err) {
    console.log('err', err)
  }
})()
