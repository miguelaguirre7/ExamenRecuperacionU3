import { Contact } from '../../../interfaces/Contacto';
import { ContactService } from '../../../servicios/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  // Atributos
  public listContacts: Contact[];

  // Inyecto el servicio de ContactService
  constructor(
    private contactService: ContactService
  ) {
    this.listContacts = [];
  }

  ngOnInit() {
    // Si la lista de contactos no esta vacia, lo recuperamos
    if(this.contactService.listContacts.length > 0){
      this.listContacts = this.contactService.listContacts;
    }else{
      // Si esta vacia, lo recuperamos del fichero
      this.contactService.getData('assets/data/contacts.json').subscribe(list => {
        this.listContacts = list;
      });
    }

    console.log(this.contactService.listContacts);

  }

}
