import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IceCreamListComponent } from './ice-cream-list/ice-cream-list.component';
import { StockManagerComponent } from './stock-manager/stock-manager.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { IceCreamMainPageComponent } from './ice-cream-main-page/ice-cream-main-page.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';
import { MonetaryBalanceComponent } from './monetary-balance/monetary-balance.component';

@NgModule({
  declarations: [
    AppComponent,
    IceCreamListComponent,
    StockManagerComponent,
    AboutComponent,
    IceCreamMainPageComponent,
    InputIntegerComponent,
    MonetaryBalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
