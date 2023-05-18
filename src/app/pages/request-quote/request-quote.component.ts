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
  channel: 'partner' | 'agent' | 'directCustomer';
  price: number;
}
@Component({
  selector: 'jrd-request-quote',
  templateUrl: './request-quote.component.html',
  styleUrls: ['./request-quote.component.scss'],
})
export class RequestQuoteComponent {
  requestQuoteForm!: FormGroup;
  requestQuoteSubmissionData: RequestQuoteSubmissionData;

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
