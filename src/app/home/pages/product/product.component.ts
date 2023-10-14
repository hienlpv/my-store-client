import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProductService } from 'src/app/core/services/product/product.service';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
    product?: Product;
    quantity = 1;

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
        private storageService: StorageService,
        private notification: NzNotificationService,
        private location: Location
    ) {
        let product_id = this.route.snapshot.paramMap.get('id');
        this.productService.getSampleData().subscribe((products) => {
            this.product = products.find((product) => product.id == product_id);
        });
    }

    goBack() {
        this.location.back();
    }

    onClickBtnAdd() {
        if (this.product) {
            this.storageService.addProductToCart(this.product, this.quantity);
            this.notification.success('Cart', `${this.product.name} was added`);
        }
    }
}
