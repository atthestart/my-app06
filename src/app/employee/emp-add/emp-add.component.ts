import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/foRms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit {
  angForm:FormGroup;
  constructor(private fb: FormBuilder , private empService:EmployeeService) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.angForm=this.fb.group({
      empId:['',Validators.required],
      empName:['',Validators.required],
      designation:['',Validators.required]
    });
  }
  addEmployee(empId,empName,designation):void{
    this.empService.addEmployee(empId,empName,designation);
  }
}
