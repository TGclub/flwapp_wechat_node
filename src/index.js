import express from 'express';

// middleware
import logger from './middlewares/logger';
import wxAPI from './middlewares/wxAPI';

// routes
import clickRoute from './routes/click';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger); // mount res.logEmail/logError/logNormal
app.use(wxAPI); // mount res.wxAPI

app.use('/click', clickRoute);

app.listen(3000, () => {
  console.log('listen 3000');
});
