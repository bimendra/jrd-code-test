import { Quote } from '../quotes/quotes.model';
import { createSelector } from '@ngrx/store';

export const selectQuote = (state: Quote) => state;
