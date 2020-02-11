import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForexCardComponent } from './components/forex-card/forex-card.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';



@NgModule({
  declarations: [ForexCardComponent, CurrencyConverterComponent],
  imports: [
    CommonModule
  ],
  exports: [ForexCardComponent, CurrencyConverterComponent]
})
export class SharedModule { }
