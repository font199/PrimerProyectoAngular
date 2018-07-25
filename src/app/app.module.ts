import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/navbar.component';
import { HelloWorldComponent } from './testing/hello-world.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TareaService } from './tarea/shared/tarea.service';
import { JwtInterceptor } from './shared/interceptors/jwtIterceptor';
import { FakeBackendProvider } from './shared/interceptors/fakeBackendInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HelloWorldComponent
    
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [        
    TareaService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
      },

    // provider used to create fake backend
    FakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
