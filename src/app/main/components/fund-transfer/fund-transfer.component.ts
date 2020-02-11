import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
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

  public confirmationPayload: any;
  public total: number;
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getRequest('account/getAccount/' + localStorage.getItem('userid')).subscribe((data) => {
      this.myAccountDetails = data;
    });
  }

  public showConfirmationPopDetails(event): void {
    const payload = event;
    payload.fromAccountNumber = this.myAccountDetails.accountNumber;
    payload.fromCurrency = this.myAccountDetails.currency;
    this.confirmationPayload = payload;
    this.total = Number(this.confirmationPayload.charges) + Number(this.confirmationPayload.fromAmount);
    console.log('show', payload);
    $('#successModal').modal('show');
  }

  public transactionConfirmed(): void {
    this.errorFlag = false;
    this.http.postRequest('transaction/confirmTransaction', this.confirmationPayload).subscribe((data) => {
      $('#successModal').modal('hide');
    }, (exception) => {
      this.errorFlag = true;
    });
  }

}
