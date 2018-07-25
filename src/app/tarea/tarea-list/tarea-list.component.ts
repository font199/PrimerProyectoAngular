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
  
@Input() tareas: Tarea[];
@Output() notifyTarea: EventEmitter<Tarea> = new EventEmitter<Tarea>();
  obTareaService: any;

  constructor(private tareaService: TareaService) { }

  ngOnInit() {
    console.log(`OnInit`);
    // this.tareas = this.tareaService.getTareas();
    this.obTareaService = this.tareaService.getTareasHttp().subscribe((tareas: TareaId[]) => {
        this.tareas = tareas;
    });
  
  }

  onSelect(tarea: Tarea){
    this.notifyTarea.emit(tarea);
  }

}
