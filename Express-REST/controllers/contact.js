'use strict';

const Contact = require('../models/contact');

exports.list = async (req, res, next) => {
	const contacts = await Contact.find();
	res.json(contacts);
}

exports.create = async (req, res, next) => {
	const contact = await Contact.create(req.body); // req.body est nécessaire
	res.statusCode = 201;
	res.json(contact);
}
