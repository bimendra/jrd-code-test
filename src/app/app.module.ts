import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JrdVehicleTypeComponent } from './lib/components/jrd-vehicle-type/jrd-vehicle-type.component';
import { JrdListingComponent } from './lib/components/jrd-listing/jrd-listing.component';

@NgModule({
  declarations: [AppComponent, JrdVehicleTypeComponent, JrdListingComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
