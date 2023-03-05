import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
@HostBinding('style.background') background:string = ""; 
@HostBinding('style.color') fontColor:string = "";

  constructor(private el:ElementRef, private renderer2:Renderer2) { 

  }

  @HostListener('click') OnClick(){
    console.log("click event ===")
  }
  @HostListener('mouseover') onMouseOver(){
    console.log("click event ===")
    this.background = "gray";
    this.fontColor = "red";
  }
  @HostListener('mouseout') onMouseOut(){
    console.log("click event ===")
    this.background = "black";
    this.fontColor = "white";
  }

}
