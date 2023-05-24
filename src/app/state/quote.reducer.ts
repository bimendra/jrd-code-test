import { createReducer, on } from '@ngrx/store';
import { Quote } from '../quotes/quotes.model';

import { QuoteApiActions } from './quote.actions';

export const initialState: Quote = { from: '', to: '', listings: [] };

export const quoteReducer = createReducer(
  initialState,
  on(QuoteApiActions.retrievedQuote, (_state, quote) => quote)
);
