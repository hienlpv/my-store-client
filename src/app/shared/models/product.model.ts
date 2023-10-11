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
