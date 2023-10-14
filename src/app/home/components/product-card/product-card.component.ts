import { Component, Input } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
    @Input() product: Product;

    quantity: number = 1;

    constructor(private storageService: StorageService, private notification: NzNotificationService) {}

    onClickBtnAdd(e: any) {
        e.preventDefault();
        this.storageService.addProductToCart(this.product, this.quantity);
        this.notification.success('Cart', `${this.product.name} was added`);
    }
}
