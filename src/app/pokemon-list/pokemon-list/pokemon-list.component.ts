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
  constructor(private readonly pokemonService: PokemonService, private router: Router) {}
  private currentpokemons: Array<any> = [];
  mypokemons: Pokemon[] = [];

  ngOnInit(): void {
    this.pokemonService.fetchPokemons();
    if(!localStorage.getItem('user')){
      this.router.navigate(['/']);
    }
      
      let currentpokemons = JSON.parse(
        localStorage.getItem('mypokemons')!
      );
      
      currentpokemons.forEach((element: any) => {
        this.mypokemons.push(element);
      });

        console.log(this.mypokemons + "mypokes")
        

      localStorage.setItem('mypokemons', JSON.stringify(this.mypokemons));

     
  }

  get pokemons(): any {
    return this.pokemonService.pokemons();
  }


  selectedpokemon?: Pokemon;
  public onselect(pokemon: Pokemon) {
   
    this.mypokemons.push(pokemon);
    console.log(this.mypokemons);
    localStorage.setItem('mypokemons', JSON.stringify(this.mypokemons));



   
  }
}
