import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-emp-delete',
  templateUrl: './emp-delete.component.html',
  styleUrls: ['./emp-delete.component.css']
})
export class EmpDeleteComponent implements OnInit {
  empId:any;
  constructor(private route:ActivatedRoute,private empService:EmployeeService) { }
  ngOnInit() {
   this.empId=this.route.snapshot.paramMap.get("empId");
   this.deleteEmployee(this.empId);
  }
  deleteEmployee(empId){
      this.empService.deleteEmployee(empId);
  }
}
