import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  countryList: any = ['India', 'Dubai', 'America'];
  empStatus: any = ['success', 'pending', 'inProgress', 'review'];
  empList: any = [];
  empDetails: any;
  hasEmpDatails: boolean = false;
  constructor(
    private employeeService: EmployeeService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // this.toastr.success('Hello world!', 'Success');
    // this.toastr.info('Hello world!', 'Toastr fun!');
    // this.toastr.warning('Hello world!', 'Toastr fun!');
    // this.toastr.error('Hello world!', 'Toastr fun!');
    this.loadEmployeeList();
  }

  //loading employee and initizing to employeeList variable
  loadEmployeeList() {
    this.empList = this.employeeService.empList;
  }

  //add employee to employeeList variable
  addEmployee() {
    let firstName: any = document.getElementById('firstName');
    let lastName: any = document.getElementById('lastName');
    let emailId: any = document.getElementById('emailId');
    let phoneNo: any = document.getElementById('phoneNo');
    let status: any = document.getElementById('status');
    console.log(firstName.value);
    const formData: any = {
      userId: 12,
      firstName: firstName.value,
      lastName: lastName.value,
      phoneNo: phoneNo.value,
      emailId: emailId.value,
      status: status.value,
    };
    console.log(formData);
    const isEmpExist = this.empList.find((el: any) => {
      return el.emailId == formData.emailId;
    });
    // console.log(isEmpExist);
    if (isEmpExist) {
      this.toastr.warning('This email already in use', 'Warning');
    } else {
      this.empList.push(formData);
      this.toastr.success('New employee is added ssuccessfully', 'Success');
      this.resetEmpForm();
    }
  }

  resetEmpForm() {
    let firstName: any = document.getElementById('firstName');
    let lastName: any = document.getElementById('lastName');
    let emailId: any = document.getElementById('emailId');
    let phoneNo: any = document.getElementById('phoneNo');
    let status: any = document.getElementById('status');
    firstName.value = '';
    lastName.value = '';
    emailId.value = '';
    phoneNo.value = '';
    status.value = '';
  }
  //removing employee from employeeList variable
  deleteEmployee(index: number, item: any): void {
    console.log('deleteEmployee is called');
    console.log(index);
    console.log(item);
    this.hasEmpDatails = false;
    const checkConfirm = confirm('Are you sure want to delete this record?');
    if (checkConfirm) {
      this.empList.splice(index, 1);
      this.toastr.error(
        'Employee record is deleted ssuccessfully',
        'Confirmation'
      );
    }
  }

  //reading employee data from employeeList variable
  viewEmployee(index: number, item: any): void {
    console.log('viewEmployee is called');
    // console.log(item);
    console.log(index);
    this.empDetails = this.empList[index];
    this.hasEmpDatails = true;
  }

  //updating employee record of employeeList variable
  updateEmployee() {}
}
