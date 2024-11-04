import { createLogger, format, transports }from 'winston'
import path from 'node:path'
import { fileURLToPath } from 'url'
import fs from 'fs'
const { combine, timestamp, printf } = format;

// Get the __dirname equivalent in ES modules
// console.log(__filename);
// console.log(import.meta.url);
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// Define custom log format
const logFormat = printf(({ level, message, timestamp }) => {
  if(message instanceof Error){
    errorMessage = message.message;
    stack = message.stack.split('\n')[1].trim(); 
    return `${timestamp} [${level.toUpperCase()}]: ${message} at ${stack}`
  }
  if(typeof message=='object')
    message=JSON.stringify(message)
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

const logPath = path.join(__dirname, '../storage/logs/info.log');
const errorLog = path.join(__dirname, '../storage/logs/error.log');
const warnLog = path.join(__dirname, '../storage/logs/warn.log');

const logger = createLogger({
  format: combine(
    timestamp(),
    logFormat 
  ),
  transports: [
    new transports.File({ filename: logPath }),
    new transports.File({ filename:errorLog, level: 'error' }),
    new transports.File({ filename:warnLog, level: 'warn' }),
  ],
});

// If you want to log to the console as well
if (process.env.NODE_ENV === 'local') {
  logger.add(new transports.Console({
    format: combine(
      timestamp(),
      logFormat
    ),
  }));
}
export const loggerRoute=async(req, res) => {
  const filename = req.params.filename;
  const logFilePath = path.join(__dirname, '../../storage/logs/', filename+'.log'); 
  fs.readFile(logFilePath, 'utf8', (err, data) => {
      if (err) {
          return res.status(500).send('Error reading log file');
      }
      const logLines = data.trim().split('\n');
      logLines.sort((a, b) => {
          const timestampA = new Date(a.split(' ')[0]).getTime();
          const timestampB = new Date(b.split(' ')[0]).getTime();
          return timestampB - timestampA; // Descending order
      });
      res.send(`<pre>${logLines.join('\n')}</pre>`);
  });
}

export default logger;
