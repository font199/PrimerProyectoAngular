import { Injectable } from '@angular/core';
import { PERSONAS } from './mock-persona';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  /**
   * Obtener todas las Personas
   * @returns mock de Personas
   */
  getPersonas(){
    return PERSONAS;
  }

   /**
   * Obtener todas las Personas 
   * 
   * (Petición GET a una api pública)
   */
  getPersonasHttp() {
    return this.http.get<Persona[]>('/api/personas');
  }

 
  /**
   * Obtener la persona la id especificada del servidor
   * @param id Es la id de la Persona a recuperar del servidor
   */
  getPersonaHttp(id: string) {
    console.log('getPersonaHttp');
    return this.http.get(`/api/personas/${id}`);
  }

  /**
   * Insertar una Persona
   * 
   * (Petición POST a una api pública)
   * @param persona Es la persona a insertar
   */
  insertarPersonaHttp(persona: Persona) {
    return this.http.post(`/api/personas`, persona);
  }

  /**
   * Actualizar una persona 
   * @param id Id de la persona a actualizar
   * @param persona La nueva persona 
   */
  updatePersonaHttp(id: string, persona: Persona) {
    return this.http.put(`/api/personas/${id}`, persona);
  }

  /**
   * Eliminar una persona
   * @param id Id de la persona a eliminar
   */
  deletePersonaHttp(id: string){
    return this.http.delete(`/api/persona/${id}`);
  }

}

