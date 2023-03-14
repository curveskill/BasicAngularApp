import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  countryList: any = ['India', 'Dubai', 'America'];
  empStatus: any = ['success', 'pending', 'inProgress', 'review'];
  empList: any = [];
  empDetails: any;
  hasEmpDatails: boolean = false;
  employeeForm!: FormGroup;
  isSubmitted: boolean = false;
  constructor( private employeeService: EmployeeService,
    private toastr: ToastrService,
    private fb: FormBuilder) {
      this.employeeForm = new FormGroup({
        firstName: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
      });
     }

  ngOnInit(): void {
  }
  
  get f() {
    return this.employeeForm.controls;
  } // get all form fields access for template

  submitEmpForm() {
    console.log('form submitted');
    console.log(this.employeeForm.valid);
    this.isSubmitted = true;
    if (this.employeeForm.invalid) {
      return;
    }
    this.toastr.warning('This email already in use', 'Warning');
   
  }
}
