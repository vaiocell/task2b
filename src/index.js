import express from 'express';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

function nameConverse(query) {
  let userName = 'Invalid fullname';
  let checkReFailed = false;

  if (!query.fullname) {
    return 'Invalid fullname';
  }
  const fullName = query.fullname.split(' ');
  const checkRe = new RegExp('[a-zA-Zа-яА-Я]$');

  fullName.forEach((each) => {
    if (!each.match(checkRe)) {
      checkReFailed = true;
    }
  });

  if (checkReFailed) return 'Invalid fullname';

  switch (fullName.length) {
    case 3:
      userName = (fullName[fullName.length - 1].concat(' ', fullName[0].slice(0, 1), '. ', fullName[1].slice(0, 1), '.'));
      break;
    case 2:
      userName = (fullName[fullName.length - 1].concat(' ', fullName[0].slice(0, 1), '.'));
      break;
    case 1:
      userName = (fullName[fullName.length - 1]);
      break;
    default:
      break;
  }
  return userName;
}

app.get('/', (req, res, next) => {
  const query = req.query;
  const userName = nameConverse(query);
  res.send(userName);
  next();
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
