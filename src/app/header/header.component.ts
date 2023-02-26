import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean = false;
  constructor(private router:Router) {
    const checkTokenInLS = localStorage.getItem('JWTtoken');
    if(checkTokenInLS && checkTokenInLS != null){
      this.isLoggedIn = true
    }else{
      this.isLoggedIn = false
    }
  }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('JWTtoken');
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
