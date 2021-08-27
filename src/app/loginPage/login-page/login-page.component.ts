import { HtmlAstPath } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router) {}

  username = '';

  ngOnInit() { 
    if (localStorage.getItem('user')) {  //check if a user is logged in. If the user is logged in, navigate to pokemonlist 
      this.router.navigateByUrl('/pokemon-list');
    }

  
  }

  onKey(event: any){

    this.username = event.target.value //bind value from input

  }

  
  loginButton(): void {

      localStorage.setItem('user', this.username ); //store user in localstorage  
    
      this.router.navigate(['/pokemon-list']);    
    }
  }
