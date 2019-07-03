//step1:include all modules
const express = require('express');
const cors =  require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const dbconfig = require('./DB');
const apiEmpRoute = require('./server/api-employee.route');
const app = express();
const path = require('path');
//step2: configuration of db
mongoose.Promise = global.Promise;
mongoose.connect(dbconfig.DB,{ useNewUrlParser : true}).then(
    ()=>console.log("DATABASE CONNECTED"),
    (err)=> console.log(" db connectn failed")
);

//step3: handling app static resource and  api call
app.use(bodyparser.json());
app.use(cors());
//path join is used to identify the files present in the same directory level
//public : folder whicch contains all static resources
//.html,.jgp,.png,.css,.js -> all are kept in public folder
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,resp)=>{
   // resp.send("welcome to express");
   resp.sendFile("index.html");
});
//to call apiEmployee route
app.use('/emp',apiEmpRoute);
//step4: starting server
app.listen(4000,()=>{console.log("server listening at 4000")});