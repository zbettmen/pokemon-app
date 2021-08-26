import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

 export interface Pokemonobj {
    count: Number
    next: string
    previous: string
    results: Pokemon[]
    url: string
}

export interface Pokemon {
   name: String
   url: String
}

export interface trainer {
   
   data: Pokemon[]
   imgObjetUrl: string


}




