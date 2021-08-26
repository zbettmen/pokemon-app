import { Component, OnInit } from '@angular/core';
import { Pokemon,trainer } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
public tp: Array<any> = []; 
private temp: Array<any> = [] 
name: any;




  ngOnInit(): void {

    this.name = JSON.parse(localStorage.getItem("user") !)
    console.log(this.name)
    
   this.temp = (JSON.parse(localStorage.getItem("mypokemons") !))


  
    console.log(this.temp);

    this.temp.forEach(element => {
      
      this.tp.push(element)
    });

    this.tp.forEach(element => {
      console.log(element) 
      
    });
    
    


  }

}
