import logger from 'pino-http';
import dayjs from 'dayjs';

const log = logger({
    timestamp: () => `, "time" : "${dayjs().format('h a/DD/MM/YYYY')}"`
})

export default log;


