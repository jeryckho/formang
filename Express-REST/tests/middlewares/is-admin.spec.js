// BDD Behavior Driven Dev
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const isAdmin = require('../../middlewares/is-admin');

describe('middleware isAdmin', () => {
	it('should call next when i am admin', () => {
		const req = { headers: { authorization: '123' } };
		const res = { json() { }};
		const next = sinon.spy();
		isAdmin(req, res, next);
		expect(next.calledOnce).to.be.true; //TODO npm i sinon-chai
	});
});
