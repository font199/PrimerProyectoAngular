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

  getTareas(){
    return TAREAS;
  }

  getTareasHttp() {
    return this.http.get<TareaId[]>('/api/tareas');
  }

  insertarTareaHttp(tarea: Tarea) {
    return this.http.post(`/api/tareas`, tarea);
  }

  updateTareaHttp(id: string, tarea: Tarea) {
    return this.http.put(`/api/tareas/${id}`, tarea);
  }
}
