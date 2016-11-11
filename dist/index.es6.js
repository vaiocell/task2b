import express from 'express';

var app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

function nameConverse(query) {
  var userName = 'Invalid fullname';
  var checkReFailed = false;

  if (!query.fullname) {
    return 'Invalid fullname';
  }
  var fullName = query.fullname.split(' ');
  var checkRe = new RegExp('[a-zA-Zа-яА-Я]$');

  fullName.forEach(function (each) {
    if (!each.match(checkRe)) {
      checkReFailed = true;
    }
  });

  if (checkReFailed) return 'Invalid fullname';

  switch (fullName.length) {
    case 3:
      userName = fullName[fullName.length - 1].concat(' ', fullName[0].slice(0, 1), '. ', fullName[1].slice(0, 1), '.');
      break;
    case 2:
      userName = fullName[fullName.length - 1].concat(' ', fullName[0].slice(0, 1), '.');
      break;
    case 1:
      userName = fullName[fullName.length - 1];
      break;
    default:
      break;
  }
  return userName;
}

app.get('/', function (req, res, next) {
  var query = req.query;
  var userName = nameConverse(query);
  res.send(userName);
  next();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=index.es6.js.map
