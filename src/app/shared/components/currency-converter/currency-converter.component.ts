import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.sass']
})
export class CurrencyConverterComponent implements OnInit {

  @Input() baseCurrency: string;
  @Input() balance: number;
  @Output() convertedAmountEvent = new EventEmitter();
  @Input() accountDetails: {
    accountNumber: string,
    balance: string,
    currency: string
  };
  public selectedCurrency: string;
  public amount: number;
  public convertedAmount: number;
  public charges: number;

  constructor(private http: HttpService) {
    this.selectedCurrency = 'USD';
    this.amount = 0;
    this.convertedAmount = 0;
   }

  ngOnInit() {
  }

  // gets the selected currency and convert the amount to that currency
  public onChange(currency: string, isInput): void {
    if (!isInput) { this.selectedCurrency = currency;  }
    console.log(this.accountDetails);
    this.http.getRequest('currency/' + this.accountDetails.currency +
    '/' + this.selectedCurrency + '/' + this.amount).subscribe((data: any) => {
      this.convertedAmount = data.convertAmount;
      // this.charges = data.charges;
    });
    const eventPayload: {
      toAmount: number,
      toCurrency: string,
      charges: number
    } = {
      toAmount: this.convertedAmount,
      toCurrency: this.selectedCurrency,
      charges: this.charges
    };
    this.convertedAmountEvent.emit(eventPayload);
  }

  public amountChanged(): void {
    this.onChange(undefined, true);
  }

}
