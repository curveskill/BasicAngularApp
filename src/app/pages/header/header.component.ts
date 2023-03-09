import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UtillsService } from 'src/app/services/utills.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnChanges {
  @Input("messageData") messageData:any;
  @Output() messageFromEvent = new EventEmitter<any>();

  isLoggedIn:Observable<boolean> = this.utillsService.isUserLoggedIn;
  userMessage:string = "";
  constructor(private router:Router, private utillsService:UtillsService) {
    const checkTokenInLS = localStorage.getItem('JWTtoken');
    if(checkTokenInLS && checkTokenInLS != null){
      this.utillsService.isUserLoggedIn.next(true);
    }else{
      this.utillsService.isUserLoggedIn.next(false)
    }
    // this.utillsService.getIsloggedIn().subscribe((res:any)=>{
    //   console.log(res);
    //   this.isLoggedIn = res;
    // })
    
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("ngOnChanges is executed")
      console.log(changes)
      this.userMessage = changes['messageData'].currentValue
  }

  ngOnInit(): void {
    // this.userMessage = this.messageData;
  }

  sendMesageToParent(){
    this.messageFromEvent.emit("I am coming from child");
  }

  
  logout(){
    this.utillsService.userLogout();
  }
}
