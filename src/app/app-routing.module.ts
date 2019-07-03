import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpAddComponent } from './employee/emp-add/emp-add.component';
import { EmpDeleteComponent } from './employee/emp-delete/emp-delete.component';
import { EmpGetComponent } from './employee/emp-get/emp-get.component';
import { EmpEditComponent } from './employee/emp-edit/emp-edit.component';

const routes: Routes = [
  {path:'emp/create',component:EmpAddComponent},
  {path:'emp/delete/:empId',component:EmpDeleteComponent},
  {path:'emp/listEmp',component:EmpGetComponent},
  {path:'update/:empId/:designation',component:EmpEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
