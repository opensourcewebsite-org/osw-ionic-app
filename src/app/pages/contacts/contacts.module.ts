import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      loadChildren: () => import('./contact-list/contact-list.module').then(m => m.ContactListPageModule)
    }, {
      path: 'new',
      loadChildren: () => import('./contact-form/contact-form.module').then(m => m.ContactFormPageModule)
    }, {
      path: ':id',
      loadChildren: () => import('./contact-form/contact-form.module').then(m => m.ContactFormPageModule)
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
export class ContactsModule { }
