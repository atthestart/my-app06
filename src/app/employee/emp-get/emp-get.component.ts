import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-get',
  templateUrl: './emp-get.component.html',
  styleUrls: ['./emp-get.component.css']
})
export class EmpGetComponent implements OnInit {
  employees:Employee[]=[];
  selectedEmp: Employee;
  constructor(private route:ActivatedRoute, private service:EmployeeService) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(employeeList=>this.employees=employeeList);
  }
onSelection(emp:Employee){
  this.selectedEmp=emp;
}
}
