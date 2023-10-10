import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Product } from 'src/app/shared/models/product.model';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private apiService: ApiService) {}

    getSampleData() {
        return this.apiService
            .get<Product[]>('assets/data.json')
            .pipe(map((products) => products.map((product) => new Product(product))));
    }
}
