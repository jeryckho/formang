const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname,'../.editorconfig'), (err, buf) =>{
	console.log(buf.toString());
});
const express = require('express');

const app = express();

app.all('/', (req, res) => {
	res.send('Salut');
})

app.all('/Contact', (req, res) => {
	res.send('<h2>Salut</h2>');
})

app.listen(8080, () => {
	console.log('started');
})
const http = require('http');

function home(req,res) {
	res.statusCode = 200;
	res.setHeader('Content-type', 'text/plain');
	res.write('Salut');
	res.end();
}

function notFound(req,res) {
	res.statusCode = 200;
	res.setHeader('Content-type', 'text/html');
	res.write('<h2>Not Found</h2>');
	res.end();
}

const server = http.createServer();

server.on('error', err => console.log(err));

server.on("request", (req,res) => {
	switch (req.url) {
		case '/':
			home(req, res);
			break;
		default:
			notFound(req, res);
	}
});

server.listen(8080, () => {
	console.log('Server started');
})
const net = require('net');

const sck = net.connect(80, 'www.google.fr');

sck.pipe(process.stdout);

sck.once('connect', () => {
	sck.write('GET /search?q=Node.js HTTP/1.1\r\n');
	sck.write('Host: www.google.fr\r\n');
	sck.write('\r\n');
});
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
