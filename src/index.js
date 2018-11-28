import log4js from 'log4js';
import logConfig from './config/log.config';

log4js.configure(logConfig);

const debug = log4js.getLogger('email');

debug.error(new Error('dd'));

