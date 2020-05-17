import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient: HttpClient) { }

  getContacts() {
    return this.httpClient.get<User[]>(`${environment.apiUrl}/users`);
  }

  getContactById(id: string) {
    return this.httpClient.get<User>(`${environment.apiUrl}/users/${id}`);
  }
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: UserAddress;
}

export interface UserAddress {
  street: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  }

}
