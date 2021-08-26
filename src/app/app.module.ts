import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './loginPage/login-page/login-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list/pokemon-list.component';
import { TrainerComponent } from './trainerpage/trainer/trainer.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, PokemonListComponent, TrainerComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
//export const routingComponents = [PokemonListComponent];
