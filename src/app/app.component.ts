import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
  constructor(){}
  message:string = "Hi Dear User";
  title:string = 'BasicAngularApp';
  dataFromChild:any;
  ngOnInit(): void {
    console.log("ngOnInit executed")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit executed")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked executed")
  }
  sendDataToChild(){
    this.message = "Welcome dear user";
  }

  dataReceive(event:any){
    console.log(event);
    this.dataFromChild = event;
  }
}
