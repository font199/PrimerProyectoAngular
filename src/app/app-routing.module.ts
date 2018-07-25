import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tarea/tarea.module#TareaModule' },
  { path: 'persona', loadChildren: './persona/persona.module#PersonaModule'},
  { path: 'about' , loadChildren: './about/about.module#AboutModule'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
