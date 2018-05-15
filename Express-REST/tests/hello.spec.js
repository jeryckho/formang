// BDD Behavior Driven Dev
const assert = require('assert');
const {expect} = require('chai');

const sum = (a, b) => a + b;

describe('hello world du test', () => {
	describe('sum function', () => {
		it('should add 2 int', () => {
			assert.strictEqual(sum(1, 1), 2);
			assert.strictEqual(sum(1, -1), 0);
			expect(sum(1,2)).to.equals(3);
		});
	});
});

describe('test setimeout function', () => {
	it('should work', (done) => {
		setTimeout(() => {
			expect(true).to.be.true;
			done();
		},1000);
	});
});
