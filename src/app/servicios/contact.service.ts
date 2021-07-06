import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/Contacto';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // Contactos almacenados
  private _listContacts: Contact[];

  // Recuerda que el constructor de los servicios solo se ejecutan una vez
  constructor(private http: HttpClient) {
    this._listContacts = [];
  }

  /**
   * Devuelve la lista de contactos
   */
  get listContacts(): Contact[]{
    return this._listContacts;
  }

  /**
   * Añade un contacto a la lista
   * @param contact contacto a añadir
   */
  addContact(contact: Contact){
    this._listContacts.push(contact);
  }

  /**
   * Recoge los contactos del fichero json
   * @param path ruta del fichero json
   */
  getData(path: string){
    return this.http.get<Contact[]>(path).pipe(
      map(list => {
        this._listContacts = list;
        return list;
      })
    );
  }

}
