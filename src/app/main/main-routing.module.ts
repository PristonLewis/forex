import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { LoginComponent } from './components/login/login.component';
import { TranshistoryComponent } from './components/transhistory/transhistory.component'
import { AuthGuardService as AuthGuard } from '../shared/services/auth-guard.service';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'transhistory', component: TranshistoryComponent, canActivate: [AuthGuard] },
  { path: 'fundtransfer', component: FundTransferComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
