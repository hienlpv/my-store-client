import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductComponent } from './pages/product/product.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routing';
import { CartComponent } from './pages/cart/cart.component';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';

@NgModule({
    declarations: [ProductListComponent, ProductComponent, CartComponent],
    imports: [CommonModule, RouterModule.forChild(HomeRoutes), NgZorroAntdModule],
})
export class HomeModule {}
