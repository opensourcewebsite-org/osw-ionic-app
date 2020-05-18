import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactFormPageRoutingModule } from './contact-form-routing.module';

import { ContactFormPage } from './contact-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ContactFormPageRoutingModule
  ],
  declarations: [ContactFormPage]
})
export class ContactFormPageModule { }
