let products = [];
let count = 1;

module.exports.products = {};

module.exports.products.getAll = () => {
	return products;
};

module.exports.products.add = (product) => {
	product.id = count++;
	products.push(product);
};

module.exports.findByName = (name) => {
	let product = null;
	for (const p of products) {
		if(p.name === name){
			return p;
		}
	}
	return product;
};