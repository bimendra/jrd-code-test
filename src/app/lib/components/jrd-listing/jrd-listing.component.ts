import { Component } from '@angular/core';

@Component({
  selector: 'jrd-jrd-listing',
  templateUrl: './jrd-listing.component.html',
  styleUrls: ['./jrd-listing.component.scss'],
})
export class JrdListingComponent {
  thumbnails = [
    {
      type: 'Hatchback',
      url: 'assets/Hatchback.png',
    },
    {
      type: 'Sedan',
      url: 'assets/Sedan.png',
    },
    ,
    {
      type: 'SUV',
      url: 'assets/SUV.png',
    },
  ];
}
