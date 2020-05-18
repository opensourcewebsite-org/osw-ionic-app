import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactFormPage } from './contact-form.page';

const routes: Routes = [
  {
    path: '',
    component: ContactFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactFormPageRoutingModule {}
