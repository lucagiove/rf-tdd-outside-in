export {};

class Elem {
	id: string;

	constructor(att: string) {
		this.id = att;
	}
}

class PowerArray extends Array<Elem> {
	public getByAtt(att: string) {
		return this.find(_ => _.id === att);
	}
}

describe('array', function () {
	let array: PowerArray;

	beforeAll(function () {
		array = new PowerArray();
		let a = new Elem('a');
		let b = new Elem('b');
		let c = new Elem('c');
		array.push(a);
		array.push(b);
		array.push(c);
	});

	it('should have custom method', function () {
		expect(array.getByAtt('b')).toMatchObject({ id: 'b' });
	});
});
