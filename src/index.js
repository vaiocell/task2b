import express from 'express';

const app = express();

function nameConverse(query) {
  let userName = 'Invalid fullname';
  if (!query.fullname) {
    return 'No full name';
  }
  const fullName = query.fullname.split(' ');

  switch (fullName.length) {
    case 3:
      userName = (fullName[fullName.length - 1].concat(' ', fullName[0].slice(0, 1), '. ', fullName[1].slice(0, 1), '.'));
      break;
    case 2:
      userName = (fullName[fullName.length - 1].concat(' ', fullName[0].slice(0, 1)));
      break;
    case 1:
      userName = (fullName[fullName.length - 1]);
      break;
    default:
      break;
  }
  return userName;
}

app.get('/', (req, res) => {
  const query = req.query;
  const userName = nameConverse(query);
  res.send(userName);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
