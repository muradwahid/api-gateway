import { createClient } from 'redis';
import config from '../config';
import logger from './logger';

let redisClient = createClient({
  url: config.redis.url
});
redisClient.on('error', (err) => logger.error('RedisError', err));
redisClient.on('connect', (connect) => logger.info('Redis Connected'));

const connect = async (): Promise<void> => {
  await redisClient.connect();
};
export const RedisClient = {
  connect
};
