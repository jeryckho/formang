const net = require('net');

const server = net.createServer();

server.on('error', err => console.log(err));

server.on("connection", sck => {
	sck.pipe(process.stdout);
	sck.write('HTTP/1.1\r\n');
	sck.write('Content-type: text/plain\r\n');
	sck.write('\r\n');
	sck.write('Hello\r\n');
	sck.end();
})

server.listen(8080,() =>{
	console.log('Server started');
})
