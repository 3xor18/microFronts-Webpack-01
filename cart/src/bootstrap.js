import faker from 'faker';

const mount = (el) => {
	const cartText = `<div>You Have ${faker.random.number()} items in your cart</div>`;
	document.querySelector(
		'#CARTDEV'
	).innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
	const el = document.querySelector('#CARTDEV');
	if (el) {
		mount(el);
	}
}

export { mount };
