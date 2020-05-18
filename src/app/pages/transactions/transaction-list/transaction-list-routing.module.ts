import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionListPage } from './transaction-list.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionListPageRoutingModule {}
