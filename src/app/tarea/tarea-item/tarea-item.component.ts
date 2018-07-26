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

   /**
   * La classe TareaComponent nos envia la Tarea seleccionada.
   */
@Input() tarea: TareaId;
  /**
   * Envia Tarea[] actualizado al TareaComponent.
   */
@Output() notify: EventEmitter<Tarea> = new EventEmitter<Tarea>();
  tareaForm: FormGroup;

estados = [
  {label: "Desarollo" , value: "DES"},
  {label: "Producción", value: "PROD"}
]

/**
 * Ponemos en blanco todos los campos del formulario
 * @param tareaService instantacion del tareaService
 */
constructor(private tareaService: TareaService) {
  console.log('Constructor de tarea-item');
  this.tareaForm = new FormGroup({
    /** El codigo es un parametro requerido */
    codigo: new FormControl('', Validators.required),
    /** La descripcion es un parametro requerido */
    descripcion: new FormControl('',Validators.required),
    /** El mail es validado con mailValidator */
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

/**
   * Se llama cada vez que se modifican los datos de entrada (Cuando seleccionamos una Tarea de la lista).
   * 
   * Actualizamos los campos del formulario con los de la Tarea seleccionada.
   * */
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

  /**
   * Se llama cuando apretamos el boton de guardar.
   * 
   * Se inserta o se actualiza la Tarea introducida en el formulario en el Servidor
   * */
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


/**
 * Pone todos los parametros del formulario en blanco
 */
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
