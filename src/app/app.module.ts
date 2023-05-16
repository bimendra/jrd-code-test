import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VehicleTypeComponent } from './lib/components/vehicle-type/vehicle-type.component';
import { ListingCardComponent } from './lib/components/listing-card/listing-card.component';
import { ListingGridComponent } from './lib/components/listing-grid/listing-grid.component';
import { RequestQuoteComponent } from './pages/request-quote/request-quote.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { ListingTableComponent } from './lib/components/listing-table/listing-table.component';

@NgModule({
  declarations: [AppComponent, VehicleTypeComponent, ListingCardComponent, ListingGridComponent, RequestQuoteComponent, QuotesComponent, ListingTableComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
