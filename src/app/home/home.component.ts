import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UtillsService } from '../utills.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userObs$!:Observable<any>;
  testObs$:Observable<any> = from([10,30,70]);
  constructor(private utillsService:UtillsService, private http:HttpClient) { 
    console.log("isUserLoggedIn---", this.utillsService.isUserLoggedIn)
  }

  ngOnInit(): void {
   this.userObs$ = this.http.get(`${environment.apiBaseUrl}users`);
  }

  getInputValue(value:string){
    console.log(value);
  }
}
