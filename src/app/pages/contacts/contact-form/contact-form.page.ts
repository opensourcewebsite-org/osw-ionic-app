import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, ContactsService } from '../contacts.service';
import {finalize} from "rxjs/operators";
import {LoadingService} from "../../../services/loading.service";

@Component({
  selector: 'osw-contact-form',
  templateUrl: './contact-form.page.html',
  styleUrls: ['./contact-form.page.scss'],
})
export class ContactFormPage implements OnInit {
  contactId: string;
  contact: User;

  formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private contactsService: ContactsService,
    private loadingService: LoadingService,
  ) {
    this.contactId = this.route.snapshot.params.id;
  }

  async ngOnInit() {
    this.loadingService.present()
    if (!this.contactId) {
      this.formGroup = this.initForm();
    } else {
      this.contact = await this.contactsService.getContactById(this.contactId)
        .pipe(finalize(() => this.loadingService.dismiss()))
        .toPromise();
      this.formGroup = this.initForm(this.contact);
    }
  }

  private initForm(contact?: User) {
    return this.formBuilder.group({
      name: [contact?.name, Validators.compose([Validators.required])],
      email: [contact?.email, Validators.compose([Validators.required])],
      phone: [contact?.phone, Validators.compose([Validators.required])],
      website: [contact?.website, Validators.compose([Validators.required])]
    });
  }

}
