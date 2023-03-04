import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UtillsService } from '../utills.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnChanges {
  @Input("messageData") messageData:any;
  @Output() messageFromEvent = new EventEmitter<any>();

  isLoggedIn:boolean = false;
  userMessage:string = "";
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
    localStorage.removeItem('JWTtoken');
    localStorage.clear();
    this.utillsService.isUserLoggedIn.next(false)
    this.router.navigate(['/login'])
  }
}
