import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaItemComponent } from './tarea-item.component';
import { TareaService } from '../shared/tarea.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';

fdescribe('TareaItemComponent', () => {
  let component: TareaItemComponent;

  beforeEach(async(() => {
  }));


  beforeEach(() => {
  });

  it('should create', () => {
    let ts: TareaService ;
    component = new TareaItemComponent(ts);
    expect(component).toBeTruthy();
  });

  // it('Al iniciar deberia tener los campos vacios', () => {
  //   ts: TareaService = new TareaService();
  //   tareaItem: TareaItemComponent = new TareaItemComponent(ts);

  // });

  it('campo codigo debe ser vacio', () => {
    let controls = component.tareaForm.controls;
    let codigo = controls['codigo']; 
    expect(codigo.valid).toBeFalsy(); 
  });
 
});
