import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './loginPage/login-page/login-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list/pokemon-list.component';
import { TrainerComponent } from './trainerpage/trainer/trainer.component';
import { NavbarPageComponent } from './navbar/navbar-page/navbar-page.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, PokemonListComponent, TrainerComponent, NavbarPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
//export const routingComponents = [PokemonListComponent];
