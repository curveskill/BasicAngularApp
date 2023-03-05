import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
  isloading: Observable<boolean> =  this.loaderService.isLoading;
  constructor(private loaderService: LoaderService,private spinner: NgxSpinnerService){
    this.loaderService.isLoading.subscribe((res:any)=>{
      if(res){
        this.spinner.show();
      }else{
        this.spinner.hide();
      }
    })
  }
  message:string = "Hi Dear User";
  title:string = 'BasicAngularApp';
  dataFromChild:any;
  ngOnInit(): void {
    console.log("ngOnInit executed");
    
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
