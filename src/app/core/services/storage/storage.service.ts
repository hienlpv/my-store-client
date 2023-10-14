import { Injectable } from '@angular/core';
import { isEmpty, isNil } from 'lodash';
import { CartProduct, Product } from 'src/app/shared/models/product.model';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    constructor() {}

    addProductToCart(product: Product, quantity: number) {
        let cart_product = new CartProduct({ ...product, quantity });
        let cart_products = this.getCartProducts();
        let index = cart_products.findIndex((product) => product.id === cart_product.id);
        if (index < 0) {
            cart_products.push(cart_product);
        } else {
            let cart_product_exist = cart_products[index];
            cart_products.splice(index, 1, {
                ...cart_product_exist,
                quantity: cart_product_exist.quantity + quantity,
            });
        }
        sessionStorage.setItem('cart', JSON.stringify(cart_products));
    }

    getCartProducts() {
        let cart_products: CartProduct[] = [];
        let json_cart = sessionStorage.getItem('cart');
        if (!isNil(json_cart) && !isEmpty(json_cart)) {
            cart_products = JSON.parse(json_cart);
        }
        return cart_products;
    }

    clearCart() {
        sessionStorage.removeItem('cart');
    }
}
