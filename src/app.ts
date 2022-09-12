import express from 'express';
import config from 'config';
import connect from './utils/connect';
import log from './utils/logger';

const port = config.get<number>('port');

const app = express();

app.listen(3030, async () => {
  await connect();
  log.logger.info('App is running')
})

