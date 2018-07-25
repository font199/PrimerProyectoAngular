import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../shared/tarea';
import { TareaService } from '../shared/tarea.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TareaId } from '../shared/tarea-id';
import { mailValidator } from '../../shared/validators/mailValidator';

@Component({
  selector: 'wfg-tarea-item',
  templateUrl: './tarea-item.component.html',
  styles: []
})
export class TareaItemComponent implements OnInit {

@Input() tarea: TareaId;
@Output() notify: EventEmitter<Tarea> = new EventEmitter<Tarea>();
  tareaForm: FormGroup;

estados = [
  {label: "Desarollo" , value: "DES"},
  {label: "Producción", value: "PROD"}
]


constructor(private tareaService: TareaService) {
  console.log('Constructor de tarea-item');
  this.tareaForm = new FormGroup({
    codigo: new FormControl('', Validators.required),
    descripcion: new FormControl('',Validators.required),
    mail: new FormControl('',mailValidator),
    tipo: new FormControl(''),
    estadoTarea: new FormControl(''),
    fechaAlta: new FormControl(''),
    usuario: new FormControl(''),
    despliegue: new FormControl('')
  });
}

ngOnInit() {
  console.log('Init de tarea-item');
}

ngOnChanges(){
  console.log('Change de tarea-item');
  if(this.tarea && this.tarea.id){
    let controls = this.tareaForm.controls;
    controls['codigo'].setValue(this.tarea.codigo);
    controls['descripcion'].setValue(this.tarea.descripcion);
    controls['aplicacion'].setValue(this.tarea.aplicacion);
    controls['tipo'].setValue(this.tarea.tipo);
    controls['estadoTarea'].setValue(this.tarea.estado);
    controls['fechaAlta'].setValue(this.tarea.fechaAlta);
    controls['usuario'].setValue(this.tarea.usuario);
    controls['despliegue'].setValue(this.tarea.despliegue);
  }
}

onSuccess() {
  console.log(this.tarea);
  let controls = this.tareaForm.controls;
  const tareaSave: Tarea = {
    codigo: controls['codigo'].value,
    descripcion: controls['descripcion'].value,
    aplicacion: controls['aplicacion'].value,
    tipo: controls['tipo'].value,
    estado: controls['estadoTarea'].value,
    fechaAlta: controls['fechaAlta'].value,
    usuario: controls['usuario'].value,
    despliegue: controls['despliegue'].value
  };

  console.log(tareaSave);

  if (this.tarea && this.tarea.id) {
    this.tareaService.updateTareaHttp(this.tarea.id, tareaSave).subscribe((tareas: Tarea[]) => {
      this.notify.emit(tareaSave);
    });
  } else {
    this.tareaService.insertarTareaHttp(tareaSave).subscribe((tareas: Tarea[]) => {
      this.notify.emit(tareaSave);
    });
  }
}

onNew(){
  console.log('onNew');
  
    let controls = this.tareaForm.controls;
    this.tarea.id = null;
    controls['codigo'].setValue('');
    controls['descripcion'].setValue('');
    controls['aplicacion'].setValue('');
    controls['tipo'].setValue('');
    controls['estadoTarea'].setValue('');
    controls['fechaAlta'].setValue('');
    controls['usuario'].setValue('');
    controls['despliegue'].setValue('');
  
}

}
