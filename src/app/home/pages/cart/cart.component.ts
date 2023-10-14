import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { CartProduct } from 'src/app/shared/models/product.model';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
    cart_products: CartProduct[] = [];
    checkout_form: FormGroup;
    is_checkout = false;

    constructor(private storageService: StorageService, private fb: FormBuilder) {
        this.cart_products = this.storageService.getCartProducts();
        this.initForm();
    }

    get total() {
        return this.cart_products.reduce((total, product) => (total += product.price * product.quantity), 0).toFixed(2);
    }

    initForm() {
        this.checkout_form = this.fb.group({
            fullname: [null, [Validators.required, Validators.minLength(3)]],
            address: [null, [Validators.required, Validators.minLength(6)]],
            credit: [null, [Validators.required, Validators.minLength(16), Validators.pattern('^[0-9]*$')]],
        });
    }

    onSubmit() {
        this.storageService.clearCart();
        this.is_checkout = true;
    }
}
