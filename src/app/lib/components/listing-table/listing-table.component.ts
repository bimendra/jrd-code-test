import { Component, Input } from '@angular/core';
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
  @Input() listings?: Listing[];
}
