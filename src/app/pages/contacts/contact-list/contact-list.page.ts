import { Component, OnInit } from '@angular/core';
import { ContactsService, User } from '../contacts.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import {finalize} from "rxjs/operators";
import {LoadingService} from "../../../services/loading.service";
@Component({
  selector: 'osw-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage implements OnInit {
  contacts: Observable<User[]>;
  constructor(private contactsService: ContactsService,
              private navCtrl: NavController,
              private loadingService: LoadingService) { }

   ngOnInit() {

     this.loadingService.present()

      this.contacts = this.contactsService.getContacts()
                        .pipe(finalize(() => this.loadingService.dismiss()));
  }

  editContact(contact: User) {
    this.navCtrl.navigateForward(`/contacts/${contact.id}`);
  }

}
