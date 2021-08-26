import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon, Pokemonobj } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  //private _pokemons: Pokemonobj | null = null;
  private _error: string = '';
  private _pokemons: any = [];

  constructor(private readonly http: HttpClient) {}
  pokemonURLavatars =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  pokemonApi = 'https://pokeapi.co/api/v2/pokemon?limit=30';

  public fetchPokemons(): void {
    this.http.get<any>(this.pokemonApi).subscribe(
      (pokemons: any) => {
        // this._pokemons = pokemons;
        this._pokemons.push(this.getImg(pokemons.results));

        console.log(this._pokemons);
      },
      (error: HttpErrorResponse) => {
        this._error = error.message;
      }
    );
  }

  public getImg(data: any) {
    const PokemonUrlArr: any = [];
    let i = 0;
    for (let f of data) {
      PokemonUrlArr.push({
        data: data[i],
        imgObjetUrl: this.pokemonURLavatars + (i + 1) + '.png',
      });
      i++;
    }
    return PokemonUrlArr;
  }

  public pokemons(): any {
    return this._pokemons[0];
  }

  public error(): string {
    return this._error;
  }
}
