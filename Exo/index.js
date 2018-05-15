'use strict';

const fs = require("fs-extra");
const path = require('path');
const dest = 'dist';
const src = 'src';
const jsName = 'app.js'

fs.remove(dest)
	.catch((err) => console.log(err))
	.then(() => fs.ensureDir(dest))
	.then(() => fs.ensureDir(dest + '/js'))
	.then(() => fs.readdir(src + '/js'))

	.then((list) => list.filter((item) => item.match(/\.js$/i)))
	.then((jss) => Promise.all(jss.map((item) => fs.readFile(path.resolve(__dirname, src + '/js/' + item)))))
	.then((bufs) => Buffer.concat(bufs))
	.then((buf) => fs.writeFile(path.resolve(__dirname, dest + '/js/' + jsName), buf))

	.then(() => fs.readFile(path.resolve(__dirname, src + '/index.html')))
	.then((html) => html.toString())


	.then((res) => console.dir(res))
	.catch((err) => console.log(err))
	;
