import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.router.navigateByUrl('/pokemon-list');
    }
  }
  loginButton(event: any): void {
    if (event.target.user !== null) {
      localStorage.setItem('user', event.target.user.value);
      this.router.navigate(['/pokemon-list']);
    }
  }
}
