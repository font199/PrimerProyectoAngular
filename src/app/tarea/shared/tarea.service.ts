import { Injectable } from '@angular/core';
import { TAREAS } from './mock-tarea';
import { HttpClient } from '@angular/common/http';
import { TareaId } from './tarea-id';
import { Tarea } from './tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http: HttpClient) { }

  /**
   * Obtener todas las Tareas
   * @returns mock de tareas
   */
  getTareas(){
    return TAREAS;
  }

  /**
   * Obtener todas las Tareas 
   * 
   * (Petición GET a una api pública)
   */
  getTareasHttp() {
    return this.http.get<TareaId[]>('/api/tareas');
  }

   /**
   * Insertar una Tarea
   * 
   * (Petición POST a una api pública)
   */
  insertarTareaHttp(tarea: Tarea) {
    return this.http.post(`/api/tareas`, tarea);
  }


   /**
   * Actualizar una Tarea
   * 
   * (Petición PUT a una api pública)
   */
  updateTareaHttp(id: string, tarea: Tarea) {
    return this.http.put(`/api/tareas/${id}`, tarea);
  }
}
