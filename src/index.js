import express from 'express';

// middleware
import logger from './middlewares/logger';

const app = express();

app.use(logger);

app.use('/', (req, res) => {
  res.logEmail.error('hello world');
  res.write('done');
  res.end();
});

app.listen(3000, () => {
  console.log('listen 3000');
});
