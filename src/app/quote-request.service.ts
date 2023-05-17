import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import QuoteRequest from './lib/interfaces/quote-request.interface';

@Injectable({
  providedIn: 'root',
})
export class QuoteRequestService {
  private quoteRequestUrl =
    'https://justcors.com/l_s25k4imafx/https://jayridechallengeapi.azurewebsites.net/api/QuoteRequest';
  constructor(private http: HttpClient) {}

  getQuoteRequest(): Observable<QuoteRequest> {
    return this.http
      .get<QuoteRequest>(this.quoteRequestUrl)
      .pipe(catchError(this.handleError<QuoteRequest>('getQuoteRequest')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
