import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { LoginComponent } from './components/login/login.component';
import { TranshistoryComponent } from './components/transhistory/transhistory.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'transhistory', component: TranshistoryComponent },
  { path: 'fundtransfer', component: FundTransferComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
