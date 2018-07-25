import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from '../shared/persona';
import { PersonaService } from '../shared/persona.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'wfg-persona-list',
  templateUrl: './persona-list.component.html',
  styles: []
})


export class PersonaListComponent implements OnInit {

  /**
   * Recibimos la lista de Personas que nos envia PersonaComponent
   */
  @Input() personas: Persona[];
  /**
   * Enviamos a PersonaComponent la Persona seleccionada de la lista
   */
  @Output() notifyPersona: EventEmitter<Persona> = new EventEmitter<Persona>();

  obPersonaService: any;
  personaModal: Persona;

  constructor(private personaService: PersonaService, private router: Router, private modalService: NgbModal) { }

  /**
   * Se llama cuando el componente es creado
   * 
   * Se hace la peticion 
   */
  ngOnInit() {
    //this.personas = this.personaService.getPersonas();
    console.log(`OnInit`);
    this.obPersonaService = this.personaService.getPersonasHttp().subscribe((personas: Persona[]) => {
        this.personas = personas;
    });
  }

  onSelect(persona: Persona){
    this.notifyPersona.emit(persona);
  }

  print(persona: Persona){
     this.router.navigate([`persona/print/${persona.id}`]);
  }

  delete(content,persona: Persona) {
      this.personaModal = persona;
      this.modalService.open(content, {backdropClass: 'light-blue-backdrop'}).result.then((result) => {
        if(result == 'Delete click'){ 
          this.personaService.deletePersonaHttp(persona.id).subscribe(() => {
          });
        }
      });
  }


}
