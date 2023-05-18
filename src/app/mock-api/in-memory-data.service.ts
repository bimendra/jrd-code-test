import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import RequestQuoteFormSubmissionData from '../lib/interfaces/request-quote-form-submission-data-form.interface';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const submissions: RequestQuoteFormSubmissionData[] = [];
    return { submissions };
  }
}
