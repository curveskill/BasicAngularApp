import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  empData: any = [];
  constructor(private employeeService:EmployeeService) {
    this.empData = this.employeeService.empList;
  }

  ngOnInit(): void {
  }

}
