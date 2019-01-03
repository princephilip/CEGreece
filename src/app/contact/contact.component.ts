import { Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  submitted: boolean = false
  disabledSubmitButton: boolean = true
  contactForm: FormGroup
  reasonsSelect: Array<any>
  
  constructor(private fb: FormBuilder, private contactService: ContactService) { 
   this.contactForm = this.fb.group({
     'name': ['', Validators.required],
     'email': ['',Validators.compose([ Validators.required, Validators.email])],
     'country': ['', Validators.required],
     'phone': ['', Validators.required],
     'subject': ['', Validators.required],
     'message': ['', Validators.required],
   })
  }

  ngOnInit() {
    this.reasonsSelect = [
      { value: 'Prayer Request', label: 'Prayer Request' },
      { value: 'Testimony', label: 'Testimony' },
      { value: 'General Enquiry', label: 'General Enquiry' },
      ];
    }
  

  onSubmit(){
    this.contactService.addContact(this.contactForm.value)
    this.submitted = true
  }
}
