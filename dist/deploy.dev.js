"use strict";

var ci = require('miniprogram-ci');

(function _callee() {
  var project, previewResult;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          project = new ci.Project({
            appid: 'wxc326b824cc3d1077',
            type: 'miniProgram',
            projectPath: './dist',
            privateKeyPath: './private.key',
            ignores: ['node_modules/**/*']
          });
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(ci.preview({
            project: project,
            robot: 2,
            desc: 'master/V1.0.0',
            // 此备注将显示在“小程序助手”开发版列表中
            setting: {
              es6: true
            },
            qrcodeFormat: 'image',
            qrcodeOutputDest: 'qrcode/preview-qrcode.jpg',
            onProgressUpdate: console.log // pagePath: 'pages/index/index', // 预览页面
            // searchQuery: 'a=1&b=2',   // 预览参数 [注意!]这里的`&`字符在命令行中应写成转义字符`\&`

          }));

        case 4:
          previewResult = _context.sent;
          console.log(previewResult);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.log('err', _context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
})();