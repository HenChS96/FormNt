import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { APP_ROUNTING } from './app.routes';

import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUNTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
