class Product {
    constructor() {

    }

    async getProducts() {
        console.log('Get products');
        return [
            { id: 1, name: 'Product 1' },
            { id: 2, name: 'Product 2' },
            { id: 3, name: 'Product 3' },
        ];
    }
}

export default Product;