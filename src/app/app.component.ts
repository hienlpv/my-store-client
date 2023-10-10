import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private router: Router) {}

    onClickProducts(e: any) {
        e.preventDefault();
        this.router.navigateByUrl('home/products');
    }

    onClickCart(e: any) {
        e.preventDefault();
        this.router.navigateByUrl('home/cart');
    }
}
