import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../shared/persona.service';
import { Persona } from '../shared/persona';

@Component({
  selector: 'wfg-persona-print',
  templateUrl: './persona-print.component.html',
  styleUrls: ['./persona-print.component.css']
})
export class PersonaPrintComponent implements OnInit, OnDestroy  {
  params: any;
  id: string;
  persona: Persona;

  constructor(private personaService: PersonaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.params = this.activatedRoute.params.subscribe(params => this.id = params['id']);
    this.personaService.getPersonaHttp(this.id).subscribe((persona: Persona) => {
      this.persona = persona;
      console.log(persona);
    });
  }

  ngOnDestroy(){
    this.params.unsubscribe();
  }

}
