import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  countryList:any = ["India","Dubai","America"];
  empList: any = [
    {
      userId: 'rirani',
      jobTitleName: 'Developer',
      firstName: 'Romin',
      lastName: 'Irani',
      preferredFullName: 'Romin Irani',
      employeeCode: 'E1',
      region: 'CA',
      phoneNumber: '408-1234567',
      emailAddress: 'romin.k.irani@gmail.com',
      status:"success"
    },
    {
      userId: 'nirani',
      jobTitleName: 'Developer',
      firstName: 'Neil',
      lastName: 'Irani',
      preferredFullName: 'Neil Irani',
      employeeCode: 'E2',
      region: 'CA',
      phoneNumber: '408-1111111',
      emailAddress: 'neilrirani@gmail.com',
      status:"pending"
    },
    {
      userId: 'thanks',
      jobTitleName: 'Program Directory',
      firstName: 'Tom',
      lastName: 'Hanks',
      preferredFullName: 'Tom Hanks',
      employeeCode: 'E3',
      region: 'CA',
      phoneNumber: '408-2222222',
      emailAddress: 'tomhanks@gmail.com',
      status:"inProgress"
    },
    {
      userId: 'thanks',
      jobTitleName: 'Program Directory',
      firstName: 'Tom',
      lastName: 'Hanks',
      preferredFullName: 'Tom Hanks',
      employeeCode: 'E3',
      region: 'CA',
      phoneNumber: '408-2222222',
      emailAddress: 'tomhanks@gmail.com',
      status:"review"
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
