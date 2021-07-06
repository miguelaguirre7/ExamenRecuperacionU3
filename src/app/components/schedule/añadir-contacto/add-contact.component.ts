import { ContactService } from '../../../servicios/contact.service';
import { Contact } from '../../../interfaces/Contacto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  // Atributos
  public contact: Contact;

  // Route sirve para manejar rutas
  constructor(
    private contactService: ContactService,
    private route: Router
  ) {
    this.contact = {
      'name': '',
      'surname': '',
      'description': '',
      'sex': 'hombre',
      'email': '',
      'telephone': '',
      'carrera': ''
    }
  }

  ngOnInit() {
  }

  /**
   * Añade el contacto, con los datos añadidos en el formulario
   */
  addContact() {

    console.log(this.contact);
    // Añado el contacto
    this.contactService.addContact(this.contact);
    // Vuelvo al inicio
    this.route.navigate(['/list-contact']);
  }

}
