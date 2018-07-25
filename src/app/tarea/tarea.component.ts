import { Component, OnInit } from '@angular/core';
import { Tarea } from './shared/tarea';

@Component({
  selector: 'wfg-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  tarea: Tarea;
  tareas: Tarea[];

  constructor() { }

  ngOnInit() {
  }

  onSelectTarea(tarea: Tarea){
    this.tarea = tarea;
  }

  mostrarSuccess(tarea: Tarea){
    console.log(`Tarea ${tarea.codigo} registrada`);
    this.tarea = null;
  }

}
