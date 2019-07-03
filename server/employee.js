//step1 : include mongoos
const mongoose = require('mongoose');
const Schema=mongoose.Schema;
//step2 : create a collection using schema
//mongoose allows us  to work with collection as an object
//it acts as on ORM
// ORM converts raw data into object
//new Schema ({attributes in document},{name of  collection})
let Employee=new Schema({
    empId:{type:Number},
    empName:{type:String},
    designation:{type:String}
},{
     collection:'employee'
});
//to access your ddocumnt created in mongodb as an object we call mongoose.model('1','2')
//where 1: name of module to be exported(object name), 2:module which represents your documnt in mongo(schema name)
//mongoose.model converts each row into a object
module.exports=mongoose.model("Employee",Employee);