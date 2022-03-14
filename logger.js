const logger = require('winston')
logger.add(new logger.transports.File({ filename: 'log/logfile.log' }))

module.exports = logger;
