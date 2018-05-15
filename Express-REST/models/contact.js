'use strict';

// const contacts = [{
// 	firstName: 'Jérôme',
// 	lastName: 'Chery',
// 	id: 123
// },
// {
// 	firstName: 'Léa',
// 	lastName: 'Chery',
// 	id: 234
// },
// ];

// const nextID = () => contacts[contacts.length - 1].id + 1;

// exports.find = () => Promise.resolve(contacts);
// exports.create = (contact) => {
// 	const copy = { ...contact };
// 	copy.id = nextID();
// 	contacts.push(copy);
// 	return Promise.resolve(copy);
// };

const mongoose = require('mongoose');
const schema = new mongoose.Schema({
	firstName: {
		type: String,
		trim:true,
		required: [true, 'firstName is required']
	},
	lastName: { type: String, trim:true, required:true}
});

module.exports = mongoose.model('Contact', schema);


