import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      loadChildren: () => import('./transaction-list/transaction-list.module').then(m => m.TransactionListPageModule)
    }, {
      path: ':id',
      loadChildren: () => import('./transaction-form/transaction-form.module').then(m => m.TransactionFormPageModule)
    }]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TransactionsModule { }
