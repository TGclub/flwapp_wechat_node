import express from 'express';

// middleware
import logger from './middlewares/logger';
import wxAPI from './middlewares/wxAPI';

// routes
import clickRoute from './routes/click';

const app = express();

app.use(logger);
app.use(wxAPI);

app.use('/click', clickRoute);

app.listen(3000, () => {
  console.log('listen 3000');
});
