import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, AfterViewInit {
  @ViewChild("searchInput") searchInput!:ElementRef;

  empData: any = [];
  constructor(private employeeService:EmployeeService, private renderer:Renderer2) {
    this.empData = this.employeeService.empList;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
      console.log(this.searchInput.nativeElement)
  }
  getValue(){
    console.log("event executed");
    console.log(this.searchInput.nativeElement.value);
    // this.searchInput.nativeElement.style.backgroundColor = "red"; // without Renderer2 service
    this.renderer.addClass(this.searchInput.nativeElement, 'inputStyle'); // with Renderer2 service best
  }
}
