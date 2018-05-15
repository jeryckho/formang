// BDD Behavior Driven Dev
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const Contact = require('../../models/contact');
const contactCtrl = require('../../controllers/contact');

describe('controller Contact', () => {
	describe('method list', () => {
		it('should send list of contacts', async () => {
			// const req = { headers: { authorization: '123' } };
			const data = [{firstName:'A'}];
			const res = { json(el) {
				expect(el).to.equals(data);
			}};
			const mocckContact = sinon.mock(Contact);
			mocckContact.expects('find').resolves(data);
			await contactCtrl.list({}, res);
		});
	});
});
