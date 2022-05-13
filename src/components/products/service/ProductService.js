
export default class ProductService {

    getProductsSmall() {
		return fetch('./demo/data/products-small.json').then(res => res.json()).then(d => d.data);
	}

	getProducts() {
		return fetch('./demo/data/product.json').then(res => res.json()).then(d => d.data);
    }

    getProductsWithOrdersSmall() {
		return fetch('./demo/data/products-orders-small.json').then(res => res.json()).then(d => d.data);
	}
}

    