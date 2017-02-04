
let express = require ('express');
let config = require('./config/config');
let cron = require('cron');
let morgan = require('morgan');
let app = express();

app.use(morgan('dev'));
let helloJob = require('./Jobs/hello')(cron,config);
let countJob = require('./Jobs/countJob')(cron,config);

require('./routes/routes')(app,express,helloJob,countJob);

app.listen(config.port,function () {
  console.log('server is Listening on Port 3000')
});
