import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {
  @ViewChild("signUpFrom") signUpFrom!:ElementRef
  formData:any = {};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Form submitted")
    console.log(this.formData);
  }
}
