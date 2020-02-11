import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
const routes: Routes = [
  { path: 'fundtransfer', component: FundTransferComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
