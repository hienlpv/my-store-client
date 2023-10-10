import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    products: Product[] = [];

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.productService.getSampleData().subscribe((products) => (this.products = products));
    }
}
