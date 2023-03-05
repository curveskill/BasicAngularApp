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
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  countryList: any = ['India', 'Dubai', 'America'];
  empStatus: any = ['success', 'pending', 'inProgress', 'review'];
  empList: any = [];
  empDetails: any;
  hasEmpDatails: boolean = false;
  employeeForm!: FormGroup;
  isSubmitted: boolean = false;
  constructor(
    private employeeService: EmployeeService,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {
    this.employeeForm = new FormGroup({
      // firstName: new FormControl("Sajjad", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      emailId: new FormControl('', [Validators.required, Validators.email]),
      phoneNo: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      status: new FormControl('', [Validators.required]),
      address: new FormGroup({
        state: new FormControl('',[Validators.required]),
        district: new FormControl('',[Validators.required]),
        city: new FormControl('',[Validators.required]),
        zipcode: new FormControl('',[Validators.required]),
      }),
      department: this.fb.array([this.createDept()]),
    });
    // this.employeeForm = this.fb.group({
    //   // firstName: new FormControl("Sajjad", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    //   firstName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    //   lastName: ["", [Validators.required,Validators.minLength(3)]],
    //   emailId:["", [Validators.required,Validators.email]],
    //   phoneNo: ["", [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    //   status: ["", [Validators.required]],
    // })
  }
  ngOnInit(): void {
  }

  createDept(): FormGroup {
    const createDeptGroup = this.fb.group({
      deptName: ['', [Validators.required]],
      empRole: ['', [Validators.required]],
    });
    return createDeptGroup;
  }

  get departmentAsArray() {
    return this.employeeForm.controls["department"] as FormArray;
  }

  get address() {
    return this.employeeForm.controls['address'] as FormGroup;
  }
  addNewDept(){
    console.log(this.departmentAsArray.length);
    if(this.departmentAsArray.length == 5){
      this.toastr.warning("You are not allowed to add more then 5 dept","Warning")
    }else{
      this.departmentAsArray.push(this.createDept());
    }
  }
  removeDept(index:number){
    console.log(index)
    this.departmentAsArray.removeAt(index);
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
    console.log(this.employeeForm.value);
    console.log(this.employeeForm.value.firstName);
    console.log(this.employeeForm.get('firstName')?.value);
    const formData: any = this.employeeForm.value;
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
      this.employeeForm.reset();

      // this.employeeForm.patchValue({
      //   "firstName":"Shaziya",
      //   "lastName":"Khan",
      // });
      // this.employeeForm.get('firstName')?.patchValue('Shaziya');
      // this.employeeForm.get('lastName')?.patchValue('Khan');
    }
  }
}
