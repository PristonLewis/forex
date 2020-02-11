import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FundTransferComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
