import wxAPI from '../main/loadWechat';

export default (req, res, next) => {
  res.wxAPI = wxAPI;
  next();
};
