import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
    product?: Product;
    quantity = 1;

    constructor(private route: ActivatedRoute, private productService: ProductService, private location: Location) {
        let product_id = this.route.snapshot.paramMap.get('id');
        this.productService.getSampleData().subscribe((products) => {
            this.product = products.find((product) => product.id == product_id);
        });
    }

    goBack() {
        this.location.back();
    }
}
