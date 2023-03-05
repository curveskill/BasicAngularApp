import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { UtillsService } from 'src/app/services/utills.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userObs$!:Observable<any>;
  testObs$:Observable<any> = from([10,30,70]);
  constructor(private utillsService:UtillsService, private http:HttpClient, private aRoute:ActivatedRoute) { 
    console.log("isUserLoggedIn---", this.utillsService.isUserLoggedIn);

    this.aRoute.data.subscribe((res:any)=>{
      console.log("data coming from resolver");
      console.log(res.listOfUser);
    })
  }

  ngOnInit(): void {
   this.userObs$ = this.http.get(`${environment.apiBaseUrl}users`);
  }

  getInputValue(value:string){
    console.log(value);
  }
}
