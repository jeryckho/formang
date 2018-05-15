'use strict';

const Contact = require('../models/contact');

exports.list = async (req, res, next) => {
	const contacts = await Contact.find();
	res.json(contacts);
};

exports.create = async (req, res, next) => {
	const contact = await Contact.create(req.body); // req.body est nécessaire
	res.statusCode = 201;
	res.json(contact);
};

exports.show = async (req, res, next) => {
	const id = req.params.id;
	try {
		const contact = await Contact.findById(id);
		if (!contact) {
			return next();
		}
		res.json(contact);
	} catch (error) {
		next(error);
	}

};

exports.remove = async (req, res, next) => {
	const id = req.params.id;
	const contact = await Contact.findByIdAndRemove(id);
	res.json(contact);
};

exports.update = async (req, res, next) => {
	const id = req.params.id;
	try {
		const contact = await Contact.findByIdAndUpdate(id, req.body);
		res.json(contact);
	} catch (error) {
		next(error);
	}
};
