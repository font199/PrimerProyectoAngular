import { Component, OnInit } from '@angular/core';
import { Tarea } from './shared/tarea';

@Component({
  selector: 'wfg-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  /** La Tarea actual */
  tarea: Tarea;
  /** La lista de Tareas */
  tareas: Tarea[];

  constructor() { }

  ngOnInit() {
  }

  /**
   * La tarea actual sera la tarea seleccionada de la lista
   * @param tarea la tarea seleccionada de la lista
   */
  onSelectTarea(tarea: Tarea){
    this.tarea = tarea;
  }

  /**
   * Nos informa por consola de la tarea registrada.
   * @param tarea la tarea guardada del formulario
   */
  mostrarSuccess(tarea: Tarea){
    console.log(`Tarea ${tarea.codigo} registrada`);
    this.tarea = null;
  }

}
