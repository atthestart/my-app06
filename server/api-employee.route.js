
const express = require('express');
const app = express();
//we are creating api link for employee
const apiEmpRouter = express.Router(); //router hepls to move  to url
//we are importing employee schema
let Employee =  require('./employee');
//GET ALL EMPLOYEE
apiEmpRouter.route('/allEmp').get((req,resp)=>{
   // resp.send("<h1>called all emp</h1>");
   //1. get data from mongodb
   Employee.find((err,data)=>{
       if(err){
           resp.send("failure");
       }
       resp.send(data);
   });
});
//get employee by empId
apiEmpRouter.route('/:empId').get((req,resp)=>{
    //resp.send("<h1>called getby  empId</h1>");
    let p_empId=req.params.empId;
    Employee.find({empId:p_empId},(err,data)=>{
        if(err) resp.send("fail to load: "+p_empId);
        resp.send(data);
    });
});
//get employee by empName
apiEmpRouter.route('/ename/:empName').get((req,resp)=>{
    //resp.send("<h1>called getby  enpName</h1>");
    let p_empName=req.params.empName;
    Employee.find({empName:p_empName},(err,data)=>{
        if(err) resp.send("fail to load: "+p_empName);
        resp.send(data);
    });
});
//add employee
apiEmpRouter.route('/addEmp').post((req,resp)=>{
    let body_employee=new Employee(req.body);
    body_employee.save().then(
        ()=> resp.send("new emp added"),
        (err)=>resp.send("failure while adding emp")
    );
   // let employee=new Employee(req.body);
    // let message="<h1> called add emp post</h1>"
    // +employee.empId+"<br/>"
    // +employee.empName+"<br/>"
    // +employee.designation+"<br/>";
    //resp.send(employee);
});
//delete employee
apiEmpRouter.route('/delete/:empId').delete((req,resp)=>{
    let p_empId = req.params.empId;
    Employee.findOneAndDelete({empId:p_empId},(err,data)=>{
        if(err) resp.send("fail to load: "+p_empId);
        resp.send(data);
    })
    //resp.send("<h1> called delete by empId</h1>");
});
//update employee
apiEmpRouter.route('/update/:empId/:designation').put((req,resp)=>{
    //resp.send("<h1> called update by empId </h1>");
    let p_empId=req.params.empId;
    let p_desig=req.params.designation;
    Employee.findOneAndUpdate({empId:p_empId},{designation:p_desig},(err,data)=>{
            if(err) resp.send("fail to update");
            resp.send("updated record for "+p_empId+" as "+p_desig);
    });
});
module.exports=apiEmpRouter;