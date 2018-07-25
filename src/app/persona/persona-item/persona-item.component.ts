import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Persona } from '../shared/persona';
import { PersonaService } from '../shared/persona.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { fechaNValidator } from '../../shared/validators/fechaNValidator';


@Component({
  selector: 'wfg-persona-item',
  templateUrl: './persona-item.component.html',
  styles: []
})
export class PersonaItemComponent implements OnInit {

  /**
   * La classe PersonaComponent nos envia la Persona seleccionada.
   */
  @Input() persona: Persona;
  /**
   * Envia Persona[] actualizado al PersonaComponent.
   */
  @Output() notify: EventEmitter<Persona> = new EventEmitter<Persona>();

  personaForm: FormGroup;

  constructor(private personaService: PersonaService) {
    console.log('Constructor de persona-item');
    this.personaForm = new FormGroup({
      nombre: new FormControl('',Validators.required),
      apellido: new FormControl('',Validators.required),
      fechaNacimiento: new FormControl('',fechaNValidator),
      mail: new FormControl('',Validators.email && Validators.required),
      sexoPersona: new FormControl('')
    });
  }


  sexos = [
    {label: "Hombre" , value: "H"},
    {label: "Mujer", value: "M"}
  ]


  ngOnInit() {
    console.log('Init de persona-item');
  }

  /**
   * Se llama cada vez que se modifican los datos de entrada (Cuando seleccionamos una Persona de la lista).
   * 
   * Actualizamos los campos del formulario con los de la Persona seleccionada.
   * */
  ngOnChanges(){
    console.log('Change de persona-item');

    if(this.persona && this.persona.id){
      let controls = this.personaForm.controls;
      controls['nombre'].setValue(this.persona.nombre);
      controls['apellido'].setValue(this.persona.apellido);
      controls['fechaNacimiento'].setValue(this.persona.fechaNacimiento);
      controls['mail'].setValue(this.persona.mail);
      controls['sexoPersona'].setValue(this.persona.sexo);
    }
  }

  /**
   * Se llama cuando apretamos el boton de guardar.
   * 
   * Se inserta o se actualiza la persona introducida en el formulario
   * */
  onSuccess(){
    // console.log(this.persona);
    let controls = this.personaForm.controls;
    if(this.persona && this.persona.id){
      const personaSave: Persona = {
          id: this.persona.id,
          nombre: controls['nombre'].value,
          apellido: controls['apellido'].value,
          fechaNacimiento: controls['fechaNacimiento'].value,
          mail: controls['mail'].value,
          sexo: controls['sexoPersona'].value
      };
      console.log('update');
      this.personaService.updatePersonaHttp(this.persona.id, personaSave).subscribe((personas: Persona[]) => {
      this.notify.emit(personaSave);
    });
   }else{
      const personaSave: Persona  = {
          id: null,
          nombre: controls['nombre'].value,
          apellido: controls['apellido'].value,
          fechaNacimiento: controls['fechaNacimiento'].value,
          mail: controls['mail'].value,
          sexo: controls['sexoPersona'].value
      };
      console.log('insert');
      this.personaService.insertarPersonaHttp(personaSave).subscribe((persona: Persona[]) => {
      this.notify.emit(personaSave);
    });
   }
    
   

}
}
