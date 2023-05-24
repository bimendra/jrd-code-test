import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable, catchError } from 'rxjs';
import { Quote } from './quotes.model';
import RequestQuoteFormSubmissionData from '../lib/interfaces/request-quote-form-submission-data-form.interface';
import QuoteRequest from '../lib/interfaces/quote-request.interface';

@Injectable({ providedIn: 'root' })
export class QuoteService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getQuoteRequest(): Observable<Quote> {
    return this.http
      .get<QuoteRequest>(
        'https://justcors.com/l_s25k4imafx/https://jayridechallengeapi.azurewebsites.net/api/QuoteRequest'
      )
      .pipe(catchError(this.handleError<QuoteRequest>('getQuoteRequest')));
  }

  submitRequestQuoteFormData(
    requestFormData: RequestQuoteFormSubmissionData
  ): Observable<RequestQuoteFormSubmissionData> {
    return this.http.post<RequestQuoteFormSubmissionData>(
      'api/submissions',
      {
        id: Math.floor(Math.random() * 10000),
        ...requestFormData,
      },
      this.httpOptions
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
