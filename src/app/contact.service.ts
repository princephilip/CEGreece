import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} 
from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  ContactInfoCollection: AngularFirestoreCollection

  constructor(private afs: AngularFirestore) { 
    this.ContactInfoCollection = this.afs.collection('ContactInfos')
  }

  addContact(ContactItem){
    this.ContactInfoCollection.add(ContactItem)
  }
}

