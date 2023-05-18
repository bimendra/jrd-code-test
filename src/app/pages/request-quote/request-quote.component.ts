import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { emailValidator } from '../../lib/directives/email-validator.directive';

interface RequestQuoteSubmissionData {
  firstName: string;
  lastName: string;
  email: string;
  channel: {
    key: string;
    label: string;
  };
  price: number;
  travelDate: string;
}
@Component({
  selector: 'jrd-request-quote',
  templateUrl: './request-quote.component.html',
  styleUrls: ['./request-quote.component.scss'],
})
export class RequestQuoteComponent {
  requestQuoteForm!: FormGroup;
  requestQuoteSubmissionData: RequestQuoteSubmissionData;

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

  constructor() {
    this.requestQuoteSubmissionData = {} as RequestQuoteSubmissionData;
  }

  ngOnInit(): void {
    this.requestQuoteForm = new FormGroup({
      firstName: new FormControl(this.requestQuoteSubmissionData.firstName, [
        Validators.required,
      ]),
      lastName: new FormControl(this.requestQuoteSubmissionData.lastName, [
        Validators.required,
      ]),
      email: new FormControl(this.requestQuoteSubmissionData.email, [
        Validators.required,
        emailValidator(),
      ]),
      price: new FormControl(this.requestQuoteSubmissionData.price, [
        Validators.required,
      ]),
      travelDate: new FormControl(this.requestQuoteSubmissionData.travelDate, [
        Validators.required,
      ]),
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
    this.requestQuoteSubmissionData = this.requestQuoteForm.value;
  }
}
