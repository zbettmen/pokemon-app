import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list/pokemon-list.component';
import { LoginPageComponent } from './loginPage/login-page/login-page.component';

const routes: Routes = [
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: '', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
