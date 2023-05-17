import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { VehicleTypeComponent } from './lib/components/vehicle-type/vehicle-type.component';
import { ListingCardComponent } from './lib/components/listing-card/listing-card.component';
import { ListingGridComponent } from './lib/components/listing-grid/listing-grid.component';
import { RequestQuoteComponent } from './pages/request-quote/request-quote.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { ListingTableComponent } from './lib/components/listing-table/listing-table.component';
import { SidebarComponent } from './lib/components/sidebar/sidebar.component';
import { HeaderComponent } from './lib/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleTypeComponent,
    ListingCardComponent,
    ListingGridComponent,
    RequestQuoteComponent,
    QuotesComponent,
    ListingTableComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
