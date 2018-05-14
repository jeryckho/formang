'use strict';

const http = require('http');
const app = require('./app');

const serv = http.createServer(app);
//const serv = https.createServer(app, { cert: fs.readFileSync('key.cert')});

serv.on('error', (err) => {
	console.log(err);
})

serv.listen(8080, () => {
	console.log('server started')
})
