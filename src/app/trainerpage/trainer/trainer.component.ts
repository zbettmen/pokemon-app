import { Component, OnInit } from '@angular/core';
import { Pokemon,trainer } from 'src/app/models/pokemon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
public tp: Array<any> = []; 
private temp: Array<any> = [] 
public name?: string = "";
constructor(private router: Router) {}


  ngOnInit(): void {

   this.temp = (JSON.parse(localStorage.getItem("mypokemons") || "you havent cought any pokemons!"))

   this.name = localStorage.getItem('user')!;
  
   if(!localStorage.getItem('user')){
    this.router.navigate(['/']);
   }
    this.temp.forEach(element => {
      this.tp.push(element)
    });    
    
  }

}
