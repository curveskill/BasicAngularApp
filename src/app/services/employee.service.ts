import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class EmployeeService {
  empList:any = [
    {
      userId: 123,
      firstName: 'Sajjad',
      lastName: 'Razi',
      phoneNo: '9939319722',
      emailId: 'sajjad@gmail.com',
      status:"success"
    },
    {
      userId: 324,
      firstName: 'Pradeep',
      lastName: 'K',
      phoneNo: '8876766587',
      emailId: 'pradeepi@gmail.com',
      status:"success"
    },
    
  ];
  constructor() { }

  getAllEmpData(){
    return this.empList;
  }

  getEmpDataBasedOnIndex(index:number):any{
    return this.empList[index]
  }
  removeEmpDataBasedOnIndex(index:number):any{
    this.empList.splice(index,1);
  }
}
