import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrls: ['./emp-edit.component.css']
})
export class EmpEditComponent implements OnInit {
  @Input()
  employee:Employee;
  
  constructor(private route:ActivatedRoute ,private service:EmployeeService) { }

  ngOnInit() {
     }
  updateEmployee(empId:any,desig:any){
    this.service.updateEmployee(empId,desig);
  }

}