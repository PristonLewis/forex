import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [FundTransferComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }