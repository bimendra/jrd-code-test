import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { RequestQuoteComponent } from './pages/request-quote/request-quote.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'request-quote',
    pathMatch: 'full',
  },
  {
    path: 'request-quote',
    component: RequestQuoteComponent,
  },
  {
    path: 'sample-quote',
    component: QuotesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
