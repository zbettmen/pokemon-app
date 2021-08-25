import { Component, OnInit } from '@angular/core';
import { Pokemonobj,Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';



@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(private readonly pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.fetchPokemons();
  }

  get pokemons(): Pokemonobj | null{
    return this.pokemonService.pokemons();
  }

 mypokemons: Pokemon[] = [];  

  selectedpokemon?: Pokemon
  public onselect(pokemon: Pokemon){

    this.mypokemons.push(pokemon);
    localStorage.setItem("mypokemons", JSON.stringify(this.mypokemons) )
   console.log(this.mypokemons)

  }

}
