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
