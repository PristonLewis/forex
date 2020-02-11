import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.sass']
})
export class FundTransferComponent implements OnInit {

  public mockMyAccountDetails = {
    accountNumber: '2011WXSSSWWWQ',
    balance: '10000',
    currency: 'INR'
  };
  constructor() { }

  ngOnInit() {
  }

}
