import { Component, OnInit } from '@angular/core';
import { Persona } from './shared/persona';

@Component({
  selector: 'wfg-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona: Persona;
  personas: Persona[];

  constructor() { }

  ngOnInit() {
  }

  onSelectPersona(persona: Persona){
    this.persona = persona;
  }

  mostrarSuccess(persona: Persona){
    console.log(`Persona ${persona.id} registrada`);
    this.persona = null;
  }


}
