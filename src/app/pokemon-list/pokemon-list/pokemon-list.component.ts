import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  constructor(
    private readonly pokemonService: PokemonService,
    private router: Router
  ) {}

  mypokemons: Pokemon[] = [];
  public catched = false;

  ngOnInit(): void {//get your pokemons you got in local storage, and store it in "mypokemons"
    this.pokemonService.fetchPokemons();
    if (!localStorage.getItem('user')) {  //check if user is logged in
      this.router.navigate(['/']);
    }
    let currentpokemons = JSON.parse(localStorage.getItem('mypokemons')!);  
    if (currentpokemons !== null) {
      currentpokemons.forEach((element: any) => {
        this.mypokemons.push(element);
      });
    }

    console.log(this.mypokemons + 'mypokes');

    localStorage.setItem('mypokemons', JSON.stringify(this.mypokemons));
  }

  get pokemons(): any {
    return this.pokemonService.pokemons();
  }

  selectedpokemon?: Pokemon; //adding new pokemons to "mypokemonsArray"
  public onselect(pokemon: Pokemon, event: any) {
    let clickedButton = event.target.id;
    document.getElementById(clickedButton)!.classList.add('green'); // if i click on a pokemon, buttons turns green
    (<HTMLInputElement>document.getElementById(clickedButton)!).disabled = true;// if i click on a pokemon, disable the button
    (<HTMLInputElement>document.getElementById(clickedButton)!).innerHTML =
      'Catched!';  // text in button change to "catched"

    this.mypokemons.push(pokemon);

    localStorage.setItem('mypokemons', JSON.stringify(this.mypokemons));
  }
}
