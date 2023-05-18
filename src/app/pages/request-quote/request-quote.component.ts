import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { emailValidator } from '../../lib/directives/email-validator.directive';
import RequestQuoteFormSubmissionData from 'src/app/lib/interfaces/request-quote-form-submission-data-form.interface';
import { QuoteRequestService } from 'src/app/quote-request.service';

@Component({
  selector: 'jrd-request-quote',
  templateUrl: './request-quote.component.html',
  styleUrls: ['./request-quote.component.scss'],
})
export class RequestQuoteComponent {
  requestQuoteForm!: FormGroup;
  requestQuoteSubmissionData: RequestQuoteFormSubmissionData;
  pickupTime = {
    hour: 9,
    minute: 30,
  };

  channels = [
    {
      key: 'partner',
      label: 'Partner',
    },
    {
      key: 'agent',
      label: 'Agent',
    },
    {
      key: 'directCustomer',
      label: 'Dircet Customer',
    },
  ];

  requestMeetAndGreet: boolean = false;

  submissionResult: any | null = null;

  constructor(private quoteRequestSerice: QuoteRequestService) {
    this.requestQuoteSubmissionData = {} as RequestQuoteFormSubmissionData;
  }

  ngOnInit(): void {
    const travelDate = new Date(Date.now() + 1000 * 3600 * 24 * 7);
    this.requestQuoteForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, emailValidator()]),
      price: new FormControl(null, [Validators.required]),
      travelDate: new FormControl(null, [Validators.required]),
      channel: new FormControl(this.channels[0].key, [Validators.required]),
    });
  }

  get firstName() {
    return this.requestQuoteForm.get('firstName')!;
  }

  get lastName() {
    return this.requestQuoteForm.get('lastName')!;
  }

  get email() {
    return this.requestQuoteForm.get('email')!;
  }

  get password() {
    return this.requestQuoteForm.get('password')!;
  }

  get price() {
    return this.requestQuoteForm.get('price')!;
  }

  get travelDate() {
    return this.requestQuoteForm.get('travelDate')!;
  }

  get channel() {
    return this.requestQuoteForm.get('channel')!;
  }

  pickupTimeControl = new FormControl<NgbTimeStruct | null>(null, (control) => {
    const value = control.value;
    if (!value) {
      return null;
    }
    return null;
  });

  public validate(): void {
    if (this.requestQuoteForm.invalid) {
      for (const control of Object.keys(this.requestQuoteForm.controls)) {
        this.requestQuoteForm.controls[control].markAsTouched();
      }
      return;
    }
  }

  submitForm() {
    this.submissionResult = null;
    this.quoteRequestSerice
      .submitRequestQuoteFormData({
        ...this.requestQuoteForm.value,
        requestMeetAndGreet: this.requestMeetAndGreet,
        pickupTime: this.pickupTime,
      })
      .subscribe((result) => {
        this.requestQuoteForm.reset();
        this.submissionResult = result;
      });
  }
}
