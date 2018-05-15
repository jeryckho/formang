'use strict';

const express = require('express');
const contactRoutes = require('./routes/contact');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test'); //TODO : utiliser mock et déplacer dans index.js

const app = express();

app.use((req,res,next) => {console.log(req.method + ' ' + req.url); next();});
app.use('/api/contacts', contactRoutes);

app.use('/api', (req,res,next) => {
	res.statusCode = 404;
	next();
});

module.exports = app;
