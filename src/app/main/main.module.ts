import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TranshistoryComponent } from './components/transhistory/transhistory.component';




@NgModule({
  declarations: [FundTransferComponent, LoginComponent, TranshistoryComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class MainModule { }
