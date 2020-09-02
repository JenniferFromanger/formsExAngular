import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { minDateValidator } from '../validators/min-date.validator';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements OnInit {
  // Declare all controls with validation rules
  orderForm = this.fb.group({
    title: ['', [Validators.required, Validators.min(5), Validators.max(30)]],
    quantity: ['', [Validators.required, Validators.max(5)]],
    date: ['', Validators.required],
    contact: ['', [Validators.required, Validators.email]],
    payments: this.fb.array([]), // FormArray control
  });

  get payments(): FormArray {
    // convert abstract control to FormArray
    return this.orderForm.get('payments') as FormArray;
  }

  addPayments() {
    // create FormGroup with two FormControl
    const paymentForm = this.fb.group({
      date: ['', [Validators.required, minDateValidator(new Date())]],
      amount: ['', Validators.required],
    });
    // parse abstract control to FormArray
    const payments = this.orderForm.get('payments') as FormArray;
    // add new FormGroup to control 'payments'
    payments.push(paymentForm);
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // get Observable from FormGroup
    this.orderForm.valueChanges
      // listen to value change
      .subscribe((value) => {
        console.log('orderForm value changes : ', value);
      });
  }

  onSubmit() {
    // Get form value as JSON object
    console.log('oderForm submitted : ', this.orderForm.value);
  }
}
