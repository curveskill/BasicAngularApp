import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import {NgbModal, ModalDismissReasons, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { UtillsService } from 'src/app/services/utills.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class EmployeesComponent implements OnInit {
  @ViewChild("empDetailsRef") empDetailsRef!:ElementRef;
  @ViewChild("empAddEditRef") empAddEditRef!:ElementRef;
  @ViewChild("empDeleteRef") empDeleteRef!:ElementRef;
  countryList: any = ['India', 'Dubai', 'America'];
  empStatus: any = ['success', 'pending', 'inProgress', 'review'];
  empList: any = [];
  empDetails: any;
  hasEmpDatails: boolean = false;
  employeeForm!: FormGroup;
  isSubmitted: boolean = false;
  employeeIndex!:number;

  constructor(
    config: NgbModalConfig,
    private employeeService: EmployeeService,
    private utillsService: UtillsService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private router: Router,
  ) {
     // customize default values of modals used by this component tree
     config.backdrop = 'static';
     config.keyboard = false;
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
    // this.toastr.success('Hello world!', 'Success');
    // this.toastr.info('Hello world!', 'Toastr fun!');
    // this.toastr.warning('Hello world!', 'Toastr fun!');
    // this.toastr.error('Hello world!', 'Toastr fun!');
    this.loadEmployeeList();
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
      this.utillsService.showWarning("You are not allowed to add more then 5 dept","Warning")
    }else{
      this.departmentAsArray.push(this.createDept());
    }
  }
  removeDept(index:number){
    console.log(index)
    this.departmentAsArray.removeAt(index);
  }
  //loading employee and initizing to employeeList variable
  loadEmployeeList() {
    this.empList = this.employeeService.empList;
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
      this.utillsService.showWarning('This email already in use', 'Warning');
    } else {
      this.empList.push(formData);
      this.utillsService.showSuccess('New employee is added ssuccessfully', 'Success');
      this.employeeForm.reset();

      // this.employeeForm.patchValue({
      //   "firstName":"Shaziya",
      //   "lastName":"Khan",
      // });
      // this.employeeForm.get('firstName')?.patchValue('Shaziya');
      // this.employeeForm.get('lastName')?.patchValue('Khan');
    }
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
      this.utillsService.showWarning('This email already in use', 'Warning');
    } else {
      this.empList.push(formData);
      this.utillsService.showSuccess('New employee is added ssuccessfully', 'Success');
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

  showEmpDeleteModal(index: number, item: any){
    this.employeeIndex = index;
    this.modalService.open(this.empDeleteRef);
  }
  //removing employee from employeeList variable
  deleteEmployee(): void {
    console.log(this.employeeIndex);
    this.empList.splice(this.employeeIndex, 1);
    this.modalService.dismissAll();
    this.utillsService.showSuccess('Employee record deleted ssuccessfully','Success');
    // this.hasEmpDatails = false;
    // const checkConfirm = confirm('Are you sure want to delete this record?');
    // if (checkConfirm) {
    //   this.empList.splice(index, 1);
    //   this.toastr.error(
    //     'Employee record is deleted ssuccessfully',
    //     'Confirmation'
    //   );
    // }
  }

  addEditEmp(){
    // this.router.navigate(['/add-employee']);

    //show add popup modal
    this.modalService.open(this.empAddEditRef,{ fullscreen: true })
  }
  //reading employee data from employeeList variable
  viewEmployee(index: number, item: any): void {
    console.log('viewEmployee is called');
    // console.log(item);
    console.log(index);
    this.empDetails = this.empList[index];
    // this.hasEmpDatails = true;
    this.modalService.open(this.empDetailsRef);
  }

  //updating employee record of employeeList variable
  updateEmployee() {}
}
