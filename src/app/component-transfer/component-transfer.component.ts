import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionModel } from '../component-transactions/component-transactoinsModel.component';
import { AppService } from '../services/app-service.service' 

@Component({
  selector: 'app-component-transfer',
  templateUrl: './component-transfer.component.html',
  styleUrls: ['./component-transfer.component.scss']
})
export class ComponentTransferComponent implements OnInit {

  @Output() transferAmountData:EventEmitter<any> = new EventEmitter();

  transferForm: FormGroup;
  submitted: boolean = false;
  transactionData: TransactionModel = {};

  constructor(private formBuilder: FormBuilder, private service:AppService) {

  }

  ngOnInit() {
    this.transferForm = this.formBuilder.group({
      fromAccount: ['Free Checking(4692) - $5824.76'],
      toAccount: ['', Validators.required],
      comments: ['', Validators.required],
      amount: ['0.00', Validators.required],
    });
  }

  // getter for easy access to form fields
  get f() { return this.transferForm.controls; }

  //on form submit
  onSubmit() {
    this.submitted = true;
    if (this.transferForm.invalid) {
      return;
    } else {
      let today = new Date();
      this.transactionData.date = today;
      this.transactionData.merchant = this.transferForm.controls.toAccount.value;
      this.transactionData.amount = this.transferForm.controls.amount.value;
      this.transactionData.transactionType = this.transferForm.controls.comments.value;
      this.transactionData.logo = '../../assets/icons/the-tea-lounge.png';
      this.transactionData.categoryCode = '#12a580'
      this.service.testData = this.transactionData;
      this.transferAmountData.emit(this.transactionData);
      this.submitted = false;
    this.transferForm.reset();
    this.transferForm.controls.fromAccount.setValue('Free Checking(4692) - $5824.76');
    }

    // display form values on success
    // console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.transferForm.value, null, 4));
  }

  




}
