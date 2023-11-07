import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  createContact(contact: Contact): Observable<string> {
    return this.http.post(`${this.baseUrl}/contact`, contact, { responseType: "text" });
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.baseUrl}/contacts`);
  }

  findContactById(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.baseUrl}/contact/${id}`);
  }

  // updateContact(contact:Contact):Observable<string>{
  //   return this.http.put();
  // }

  deleteContactById(id: number): Observable<string> {
    return this.http.delete(`${this.baseUrl}/contact/${id}`, { responseType: "text" });
  }

}
