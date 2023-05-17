import { Component } from '@angular/core';
import { QuoteRequestService } from 'src/app/quote-request.service';
import QuoteRequest from '../../interfaces/quote-request.interface';
import Listing from '../../interfaces/listing.interface';
import { map } from 'rxjs/operators';
import { orderBy } from 'lodash';

@Component({
  selector: 'jrd-listing-table',
  templateUrl: './listing-table.component.html',
  styleUrls: ['./listing-table.component.scss'],
})
export class ListingTableComponent {
  constructor(private quoteRequestService: QuoteRequestService) {
    this.refreshListings();
    this.sortListings = this.sortListings.bind(this);
    this.filterListingsByPassengerCount =
      this.filterListingsByPassengerCount.bind(this);
  }

  quoteRequest?: QuoteRequest;

  page: number = 1;
  pageSize: number = 6;
  listings: Listing[] = [];
  collectionSize: number = this.listings.length;
  displayedListings: Listing[] = [];

  maxPassengers = 3;
  orderCriteria: string = 'pricePerPassenger';
  sortOrder: 'asc' | 'desc' = 'asc';

  ngOnInit() {
    this.getQuoteRequest();
  }

  getQuoteRequest() {
    this.quoteRequestService
      .getQuoteRequest()
      .pipe(
        map((quoteRequest) => {
          quoteRequest.listings = this.sortListings(quoteRequest.listings);
          return quoteRequest;
        })
      )
      .subscribe((quoteRequest) => {
        this.quoteRequest = quoteRequest;
        this.listings = this.quoteRequest.listings;
        this.refreshListings();
        this.collectionSize = this.listings.length;
      });
  }

  refreshListings() {
    this.displayedListings = this.filterListingsByPassengerCount(
      this.sortListings(this.listings)
    )
      .map((listing, i) => ({
        id: i + 1,
        ...listing,
      }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }

  sortListings(listings: Listing[]) {
    return orderBy(listings, this.orderCriteria, this.sortOrder);
  }

  filterListingsByPassengerCount(listings: Listing[]) {
    return listings.filter(
      (listing) => listing.vehicleType.maxPassengers >= this.maxPassengers
    );
  }
}
