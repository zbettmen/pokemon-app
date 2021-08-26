import { HtmlAstPath } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router) {}

  unsername = '';

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.router.navigateByUrl('/pokemon-list');
    }

  
  }

  onKey(event: any){

    this.unsername = event.target.value

  }

  
  loginButton(): void {

      localStorage.setItem('user', this.unsername);
      this.router.navigate(['/pokemon-list']);
    }
  }
