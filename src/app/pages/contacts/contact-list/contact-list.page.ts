import { Component, OnInit } from '@angular/core';
import { ContactsService, User } from '../contacts.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'osw-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage implements OnInit {
  contacts: Observable<User[]>;
  constructor(private contactsService: ContactsService, private navCtrl: NavController) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

  editContact(contact: User) {
    this.navCtrl.navigateForward(`/contacts/${contact.id}`);
  }

}
