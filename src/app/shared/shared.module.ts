import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from '../icons-provider.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, NzLayoutModule, NzMenuModule, IconsProviderModule],
    exports: [NzLayoutModule, NzMenuModule],
})
export class SharedModule {}
