import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-page',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.css']
})
export class NavbarPageComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  // methods to the buttons in navbar. redirects you arond
  toTP(){

    this.router.navigateByUrl('/trainer');

  }

  topc(){
    this.router.navigateByUrl('/pokemon-list')
  }

  tologout(){
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

}
