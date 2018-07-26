import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareaComponent } from './tarea.component';

/**
 * La ruta en blanco llama al TareaComponent
 */
const routes: Routes = [
  {   path: '', component: TareaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareaRoutingModule { }
