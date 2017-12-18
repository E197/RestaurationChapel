import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { RestaurationChapelSharedModule, UserRouteAccessService } from './shared';
import { RestaurationChapelAppRoutingModule} from './app-routing.module';
import { RestaurationChapelHomeModule } from './home/home.module';
import { RestaurationChapelAdminModule } from './admin/admin.module';
import { RestaurationChapelAccountModule } from './account/account.module';
import { RestaurationChapelEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        RestaurationChapelAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        RestaurationChapelSharedModule,
        RestaurationChapelHomeModule,
        RestaurationChapelAdminModule,
        RestaurationChapelAccountModule,
        RestaurationChapelEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class RestaurationChapelAppModule {}
