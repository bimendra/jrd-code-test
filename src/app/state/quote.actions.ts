import { createActionGroup, props } from '@ngrx/store';
import { Quote } from '../quotes/quotes.model';

export const QuoteApiActions = createActionGroup({
  source: 'Quote API',
  events: {
    'Retrieved Quote': props<Quote>(),
  },
});
