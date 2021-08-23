import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './loginPage/login-page/login-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
