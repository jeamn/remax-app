"use strict";

var ci = require('miniprogram-ci');

(function _callee() {
  var project, previewResult;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          project = new ci.Project({
            appid: 'wxc326b824cc3d1077',
            type: 'miniProgram',
            projectPath: 'dist',
            privateKeyPath: './private.wxc326b824cc3d1077.key',
            ignores: ['node_modules/**/*']
          });
          _context.next = 4;
          return regeneratorRuntime.awrap(ci.preview({
            project: project,
            desc: 'hello',
            // 此备注将显示在“小程序助手”开发版列表中
            setting: {
              es6: true
            },
            qrcodeFormat: 'image',
            qrcodeOutputDest: 'qrcode/preview-qrcode-v.jpg',
            onProgressUpdate: console.log // pagePath: 'pages/index/index', // 预览页面
            // searchQuery: 'a=1&b=2',  // 预览参数 [注意!]这里的`&`字符在命令行中应写成转义字符`\&`

          }));

        case 4:
          previewResult = _context.sent;
          console.log('=========', previewResult);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log('eeeeeeeerrrrrrr', _context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
})(); // const ci = require('miniprogram-ci')
// const yargs = require('yargs/yargs')
// const { hideBin } = require('yargs/helpers')
// console.log('fffff', yargs)
// const argv = yargs(hideBin(process.argv)).argv
// argv(
//  // 开发版: npm run deploy -- --type=develop --v=1.1.1 --robot=1 --desc=我是描述
//  // 体验版: npm run deploy -- --type=trial --v=1.1.1 --robot=1 --desc=我是描述;
//   async () => {
//     const { type = 'develop', v: version, robot = 2, desc } = argv
//     console.log(`type: ${type}`)
//     console.log(`version: ${version}`)
//     console.log(`desc: ${desc}`)
//     console.log(`robot: ${robot}`)
//     const project = new ci.Project({
//       appid: 'wxc326b824cc3d1077',
//       type: 'miniProgram',
//       projectPath: 'dist',
//       privateKeyPath: './private.wxc326b824cc3d1077.key',
//       ignores: ['node_modules/**/*'],
//     })
//     const defaults = {
//       project,
//       desc,
//       setting: {
//         es6: false,
//         urlCheck: true,
//         postcss: false,
//         minified: false,
//       }, // onProgressUpdate: console.log,
//     }
//     switch (type) {
//       case 'develop':
//         const previewConfig = Object.assign({}, defaults, {
//           qrcodeFormat: 'image',
//           qrcodeOutputDest: `qrcode/preview-qrcode-v${version}.jpg`,
//           robot,
//         })
//         await ci.preview(previewConfig)
//         break
//       case 'trial':
//         const uploadConfig = Object.assign({}, defaults, {
//           version,
//           robot: 1,
//         })
//         await ci.upload(uploadConfig)
//         break
//       default:
//         break
//     }
//   }
// )()