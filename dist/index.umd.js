(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('express')) :
  typeof define === 'function' && define.amd ? define(['express'], factory) :
  (factory(global.express));
}(this, (function (express) { 'use strict';

express = 'default' in express ? express['default'] : express;

var app = express();

function nameConverse(query) {
  var userName = 'Invalid fullname';
  if (!query.fullname) {
    return 'No full name';
  }
  var fullName = query.fullname.split(' ');

  switch (fullName.length) {
    case 3:
      userName = fullName[fullName.length - 1].concat(' ', fullName[0].slice(0, 1), '. ', fullName[1].slice(0, 1), '.');
      break;
    case 2:
      userName = fullName[fullName.length - 1].concat(' ', fullName[0].slice(0, 1));
      break;
    case 1:
      userName = fullName[fullName.length - 1];
      break;
    default:
      break;
  }
  return userName;
}

app.get('/', function (req, res) {
  var query = req.query;
  var userName = nameConverse(query);
  res.send(userName);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

})));
//# sourceMappingURL=index.umd.js.map
