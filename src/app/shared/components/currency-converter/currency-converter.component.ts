import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.sass']
})
export class CurrencyConverterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // gets the selected currency and convert the amount to that currency
  public onChange(currency: string) {
    console.log('currency', currency)
  }

}
