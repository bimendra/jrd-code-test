import { Component } from '@angular/core';
import { QuoteRequestService } from 'src/app/quote-request.service';
import QuoteRequest from '../../interfaces/quote-request.interface';
import Listing from '../../interfaces/listing.interface';
import { map } from 'rxjs/operators';
import { chunk, orderBy } from 'lodash';

@Component({
  selector: 'jrd-listing-table',
  templateUrl: './listing-table.component.html',
  styleUrls: ['./listing-table.component.scss'],
})
export class ListingTableComponent {
  constructor(private quoteRequestService: QuoteRequestService) {}

  quoteRequest?: QuoteRequest;
  defaultItemsPerPage: number = 2;
  paginatedListings: any = {};
  sortCriteria: string = 'pricePerPassenger';
  sortOrder: any = 'asc';
  minPassengerCount = 3;

  ngOnInit() {
    this.getQuoteRequest();
  }

  getQuoteRequest() {
    this.quoteRequestService
      .getQuoteRequest()
      // Using rxjs pipe to sort & filter out listings with cars max with passenger count of 3
      .pipe(
        map((quoteRequest) => {
          // ordering listing according to the price from low to high
          quoteRequest.listings = orderBy(
            quoteRequest.listings,
            this.sortCriteria,
            this.sortOrder
          );
          return quoteRequest;
        }),
        map((quoteRequest) => {
          // filtering out cars with less thaan 3 max passenger count
          quoteRequest.listings = quoteRequest.listings.filter(
            (listing) =>
              listing.vehicleType.maxPassengers >= this.minPassengerCount
          );
          return quoteRequest;
        })
      )
      .subscribe((quoteRequest) => {
        this.quoteRequest = quoteRequest;
      });
  }

  paginateListings(
    listingItems: Listing[],
    itemsPerPage = this.defaultItemsPerPage
  ) {
    const paginatedListings = chunk(listingItems, itemsPerPage);
    paginatedListings.forEach((item, i) => {
      this.paginatedListings[i] = item;
    });
  }
}
