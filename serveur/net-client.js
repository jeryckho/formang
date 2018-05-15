const net = require('net');

const sck = net.connect(80, 'www.google.fr');

sck.pipe(process.stdout);

sck.once('connect', () => {
	sck.write('GET /search?q=Node.js HTTP/1.1\r\n');
	sck.write('Host: www.google.fr\r\n');
	sck.write('\r\n');
});
