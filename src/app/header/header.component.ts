import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtillsService } from '../utills.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean = false;
  constructor(private router:Router, private utillsService:UtillsService) {

    const checkTokenInLS = localStorage.getItem('JWTtoken');
    if(checkTokenInLS && checkTokenInLS != null){
      this.utillsService.isUserLoggedIn.next(true)
    }else{
      this.utillsService.isUserLoggedIn.next(false)
    }

    this.utillsService.isUserLoggedIn.subscribe((res:any)=>{
      console.log(res);
      this.isLoggedIn = res;
    })
    // this.utillsService.getIsloggedIn().subscribe((res:any)=>{
    //   console.log(res);
    //   this.isLoggedIn = res;
    // })
    
  }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('JWTtoken');
    localStorage.clear();
    this.utillsService.isUserLoggedIn.next(false)
    this.router.navigate(['/login'])
  }
}
