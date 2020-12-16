const ci = require('miniprogram-ci')
;(async () => {
  const project = new ci.Project({
    appid: 'wxc326b824cc3d1077',
    type: 'miniProgram',
    projectPath: './dist',
    privateKeyPath: './private.key',
    ignores: ['node_modules/**/*'],
  })
  try {
    const previewResult = await ci.preview({
      project,
      robot: 2,
      desc: 'master/V1.0.0', // 此备注将显示在“小程序助手”开发版列表中
      setting: {
        es6: true,
      },
      qrcodeFormat: 'image',
      qrcodeOutputDest: 'qrcode/preview-qrcode.jpg',
      onProgressUpdate: console.log,
      // pagePath: 'pages/index/index', // 预览页面
      // searchQuery: 'a=1&b=2',   // 预览参数 [注意!]这里的`&`字符在命令行中应写成转义字符`\&`
    })
    console.log(previewResult)
  } catch (err) {
    console.log('err', err)
  }
})()
