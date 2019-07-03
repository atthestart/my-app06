import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  deleteEmployee(empId: number) {
    return this.httpClient.delete(`${this.uri}`+`/delete/`+`${empId}`)
    .subscribe(res=>console.log("emp deleted"));
  }
   
   uri='http://localhost:4000/emp';  //api url for all operations.
  constructor(public httpClient:HttpClient) { }
  getEmployees():Observable<Employee[]>{
   return this.httpClient.get<Employee[]>(`${this.uri}`+'/allEmp'); 
  }
  addEmployee(id,name,desig){
    let emp={
      empId:id,
      empName:name,
      designation:desig
    }
    return this.httpClient.post(`${this.uri}`+'/addEmp',emp)
    .subscribe(res=>console.log("New Employee registered successfully"));
  }
updateEmployee(empId,desig):any{
  return this.httpClient.put( `${this.uri}`+'/update/'+empId+'/'+desig,{})
  .subscribe(res=>console.log(empId+"updated in database"));
}
}
