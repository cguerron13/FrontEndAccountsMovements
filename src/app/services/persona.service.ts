import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/personaModel';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  baseUrl = `http://localhost:8080`

  constructor(private http:HttpClient) { }




  obtenerPersona(cedula:string){
    debugger
    return this.http.get<Persona>(`${this.baseUrl}/informacionPersona/${cedula}`);
  }


}
