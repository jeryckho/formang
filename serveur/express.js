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
