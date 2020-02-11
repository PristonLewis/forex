import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forex-card',
  templateUrl: './forex-card.component.html',
  styleUrls: ['./forex-card.component.sass']
})
export class ForexCardComponent implements OnInit {

  @Input() controls: boolean;
  @Input() accountDetails: {
    accountNumber: string,
    balance: string,
    currency: string
  };
  @Output() confirmEvent = new EventEmitter();

  public accountNumber: number;
  public description: string;
  public amountDetails: {
    toCurrency: string,
    toAmount: number,
    charges: number,
    fromAmount: number
  };
  constructor() { }

  ngOnInit() {
  }

  public getAmount(event): void {
    this.amountDetails = event;
  }

  public confirm() {
    const confirmEventPayload = {
      toAccountNumber: Number(this.accountNumber),
      toCurrency: this.amountDetails.toCurrency,
      toAmount: this.amountDetails.toAmount,
      description: this.description,
      charges: this.amountDetails.charges,
      fromAmount: this.amountDetails.fromAmount
    };
    this.confirmEvent.emit(confirmEventPayload);
  }

}
