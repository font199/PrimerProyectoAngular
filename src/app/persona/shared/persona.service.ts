import { Injectable } from '@angular/core';
import { PERSONAS } from './mock-persona';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  getPersonas(){
    return PERSONAS;
  }

  getPersonasHttp() {
    return this.http.get<Persona[]>('/api/personas');
  }

  getPersonaHttp(id: string) {
    console.log('getPersonaHttp');
    return this.http.get(`/api/personas/${id}`);
  }

  insertarPersonaHttp(persona: Persona) {
    return this.http.post(`/api/personas`, persona);
  }

  updatePersonaHttp(id: string, persona: Persona) {
    return this.http.put(`/api/personas/${id}`, persona);
  }

  deletePersonaHttp(id: string){
    return this.http.delete(`/api/persona/${id}`);
  }

}
