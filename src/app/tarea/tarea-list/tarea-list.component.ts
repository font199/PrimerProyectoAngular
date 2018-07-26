import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../shared/tarea';
import { TareaService } from '../shared/tarea.service';
import { TareaId } from '../shared/tarea-id';


@Component({
  selector: 'wfg-tarea-list',
  templateUrl: './tarea-list.component.html',
  styles: []
})
export class TareaListComponent implements OnInit {
  
 /**
   * Recibimos la lista de Tareas que nos envia TareaComponent
   */
@Input() tareas: Tarea[];
 /**
   * Enviamos a TareaComponent la Tarea seleccionada de la lista
   */
@Output() notifyTarea: EventEmitter<Tarea> = new EventEmitter<Tarea>();
  obTareaService: any;

  constructor(private tareaService: TareaService) { }

  /**
   * Se llama cuando se crea el componente
   * 
   * Se hace la peticion 
   */
  ngOnInit() {
    console.log(`OnInit`);
    // this.tareas = this.tareaService.getTareas();
    this.obTareaService = this.tareaService.getTareasHttp().subscribe((tareas: TareaId[]) => {
        this.tareas = tareas;
    });
  
  }

  /**
   * Emite una notificacion de la tarea seleccionada al TareaComponent 
   * @param tarea La tarea seleccionada de la lista
   */
  onSelect(tarea: Tarea){
    this.notifyTarea.emit(tarea);
  }

}
