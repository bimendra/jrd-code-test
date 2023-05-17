import Listing from './listing.interface';

export default interface QuoteRequest {
  from: string;
  to: string;
  listings: Listing[];
}
