export class Product {
    id: number | string;
    name: string;
    price: number;
    url: string;
    description: string;

    constructor(props?: Partial<Product>) {
        Object.assign(this, props);
    }
}

export class CartProduct extends Product {
    quantity: number;

    constructor(props?: Partial<CartProduct>) {
        super(props);
        Object.assign(this, props);
    }
}
