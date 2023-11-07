import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent implements OnInit{

  ngOnInit(): void {
      
  }

  constructor(private service:ContactService, private router:Router){}

  contact:Contact = new Contact();
  msg:string="";

  onSubmit(){
    console.log(this.contact);
    this.saveContact();
  }

  saveContact(){
    this.service.createContact(this.contact).subscribe(data => {
      console.log("SUCCESSFUL......");
      console.log(data);
      this.redirectToContactList();
    },
    error=>{
      console.log("FAILED.......");
      console.log(error);
    }
    );
  }

  redirectToContactList(){
    this.router.navigate(['/contacts']);
  }
}
