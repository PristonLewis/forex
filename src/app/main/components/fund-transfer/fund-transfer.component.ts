import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.sass']
})
export class FundTransferComponent implements OnInit {

  public mockMyAccountDetails: {
    accountNumber: string,
    balance: string,
    currency: string
  } = {
    accountNumber: '2011WXSSSWWWQ',
    balance: '10000',
    currency: 'INR'
  };
  constructor() { }

  ngOnInit() {
  }

  public showConfirmationPopDetails(event): void {
    console.log('show', event);
    $('#successModal').modal('show');
  }

}
