import { Component, OnInit } from '@angular/core';
import { UtillsService } from '../utills.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private utillsService:UtillsService) { 
    console.log("isUserLoggedIn---", this.utillsService.isUserLoggedIn)
  }

  ngOnInit(): void {
  }

}
