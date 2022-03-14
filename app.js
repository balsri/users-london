const express = require('express');
const { router } = require('./routes/users');
const  logger  = require('./logger');

const app = express();
const PORT = 5000;

app.use('/users', router);

app.get('/', (_req, res) => {
    res.locals.dirName = __dirname;
    res.sendFile(__dirname + '/index.html')
});

module.exports = app.listen(PORT, () =>
         logger.info(`Server running on port: http://localhost:${PORT}`));

