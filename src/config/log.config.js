export default {
  appenders: {
    everything: {
      type: 'file',
      filename: 'all-the-logs.log',
      maxLogSize: 10485760,
      backups: 3,
      compress: true,
    },
  },
  categories: {
    default: {
      appenders: ['everything'],
      level: 'debug',
    },
  },
};

