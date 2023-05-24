import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { orderBy, mean, min, max } from 'lodash';
import { QuoteService } from 'src/app/quotes/quote.service';
import QuoteRequest from 'src/app/lib/interfaces/quote-request.interface';
import Listing from 'src/app/lib/interfaces/listing.interface';
import { Store } from '@ngrx/store';
import { selectQuote } from 'src/app/state/quote.selector';
import { QuoteApiActions } from 'src/app/state/quote.actions';
import { QuoteRequestService } from 'src/app/quote-request.service';
import { Quote } from 'src/app/quotes/quotes.model';

@Component({
  selector: 'jrd-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent {
  constructor(
    private quoteRequestService: QuoteService,
    private store: Store
  ) {}

  // quoteNgRx = this.store.select(selectQuote);

  quoteRequest?: QuoteRequest;
  page: number = 1;
  pageSize: number = 6;
  listings: Listing[] = [];
  collectionSize: number = this.listings.length;
  displayedListings: Listing[] = [];

  maxPassengers = 3;
  orderCriteria: string = 'pricePerPassenger';
  sortOrder: 'asc' | 'desc' = 'asc';

  minPrice?: number;
  maxPrice?: number;
  avgPrice?: number;

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
        let prices: number[] = this.listings.map(
          (listing) => listing.pricePerPassenger
        );
        this.avgPrice = mean(prices);
        this.minPrice = min(prices);
        this.maxPrice = max(prices);
        this.processPagination();
        this.store.dispatch(QuoteApiActions.retrievedQuote(quoteRequest));
        // console.log('from ngrx store', this.quoteNgRx);
      });
  }

  processPagination() {
    let filteredListings: Listing[] = this.filterListingsByPassengerCount(
      this.sortListings(this.listings)
    );
    this.collectionSize = filteredListings.length;
    this.displayedListings = filteredListings
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
