import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mock-api/in-memory-data.service';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
  NgbDatepickerModule,
  NgbTimepickerModule,
  NgbToastModule,
} from '@ng-bootstrap/ng-bootstrap';
import { EmailValidatorDirective } from 'src/app/lib/directives/email-validator.directive';
import { AppComponent } from './app.component';

import { VehicleTypeComponent } from './lib/components/vehicle-type/vehicle-type.component';
import { ListingCardComponent } from './lib/components/listing-card/listing-card.component';
import { ListingGridComponent } from './lib/components/listing-grid/listing-grid.component';
import { RequestQuoteComponent } from './pages/request-quote/request-quote.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { ListingTableComponent } from './lib/components/listing-table/listing-table.component';
import { SidebarComponent } from './lib/components/sidebar/sidebar.component';
import { HeaderComponent } from './lib/components/header/header.component';
import { quoteReducer } from './state/quote.reducer';
import { StoreModule } from '@ngrx/store';

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
    EmailValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbToastModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
    }),
    StoreModule.forRoot({ quote: quoteReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
