import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.sass']
})
export class FundTransferComponent implements OnInit {
  public myAccountDetails: {
    accountNumber: string,
    balance: string,
    currency: string
  };
  public errorFlag: boolean = false;
  public errorList: Array<string>;
  public confirmationPayload: any;
  public total: number;
  constructor(private http: HttpService, private router: Router) { this.errorList = []; }

  ngOnInit() {
    // Gets the account details of the logged in customer
    this.http.getRequest('account/getAccount/' + localStorage.getItem('userid')).subscribe((data) => {
      this.myAccountDetails = data;
    });
  }

  // Opens the confirmation pop up with confirmation details
  public showConfirmationPopDetails(event): void {
    const payload = event;
    payload.fromAccountNumber = this.myAccountDetails.accountNumber;
    payload.fromCurrency = this.myAccountDetails.currency;
    this.confirmationPayload = payload;
    if (this.checkValidations(this.confirmationPayload)) {
      this.total = Number(this.confirmationPayload.charges) + Number(this.confirmationPayload.fromAmount);
      $('#successModal').modal('show');
    }
  }

  // Makes the api call with the transaction details
  public transactionConfirmed(): void {
    this.errorFlag = false;
    this.http.postRequest('transaction/confirmTransaction', this.confirmationPayload).subscribe((data) => {
      $('#successModal').modal('hide');
      this.router.navigate(['/transhistory']);
    }, (exception) => {
      this.errorFlag = true;
    });
  }

    // Does validations
    public checkValidations(confirmEventPayload): boolean {
      let flag = true;
      this.errorList = [];
      if (confirmEventPayload.toAccountNumber === undefined ||
         confirmEventPayload.toAccountNumber.toString().trim() === '0') {
        this.errorList.push('Please enter to account number');
        flag = false;
      }
      if ((Number(confirmEventPayload.fromAmount) + Number(confirmEventPayload.charges))  > Number(this.myAccountDetails.balance)) {
        this.errorList.push('Insufficient funds');
        flag = false;
      }
      console.log('confirm event', confirmEventPayload);
      if (confirmEventPayload.fromAmount < 1 ) {
        this.errorList.push('Transaction amount cannot be zero');
        flag = false;
      }
      return flag;
    }

}
