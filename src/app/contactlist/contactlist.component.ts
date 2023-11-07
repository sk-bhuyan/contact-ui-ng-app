import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {



  contacts: Contact[] = [];
  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts() {
    this.contactService.getContacts().subscribe(
      data => {
        this.contacts = data;
      });
  }

  editContact(id: number) {
    console.log("Edited :: "+id);
    this.router.navigate(['/edit', id])
  }

  deleteContact(id: number) {
    this.contactService.deleteContactById(id).subscribe(
      data => {
        console.log("SUCCESSFULL........");
        console.log(data);
        this.getAllContacts();
      },
      error=>{
        console.log("FAILED........");
        console.log(error);
      }
      );
  }
}
