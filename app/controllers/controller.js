const express=require('express');
var route=express.Router();
const mongoose=require('mongoose');
const Student=mongoose.model('students');
route.get('/',(req,res)=>{
res.render("student/addOrEdit",{
	viewTitle:"Create Student"
});
});

route.post('/',(req,res)=>{
	console.log(req.body);
	if(req.body._id=='')
		insertRecord(req,res);
	else
		updateRecord(req,res);
});
function updateRecord(req,res){
	Student.findOneAndUpdate({_id:req.body._id},req.body, {
  new: true
},(err,doc)=>{
		if(!err){
			res.redirect('student/list');
			}
		else{
			console.log('Error During record insertion'+err);
		}});
	}
function insertRecord(req,res){
	var student=new Student();
    student.fullName=req.body.fullName;
    student.enroll=req.body.enroll;
	student.email=req.body.email;
	student.mobile=req.body.mobile;
	student.save((err,doc)=>{
		if(!err){
			res.redirect('student/list');
			}
		else{
			console.log('Error During record insertion'+err);
		}

	});

}

route.get('/list',(req,res)=>{
    Student.find((err,docs)=>{
if(!err){
res.render("student/list",{
	list:docs
});
}
});
});

route.get('/:id',(req,res)=>{
    Student.findById(req.params.id,(err,docs)=>{
if(!err){
res.render("student/addOrEdit",{
	viewTitle:"Update Student Data",
	employee:docs
});
}
});
});

route.get('/delete/:id',(req,res)=>Student.findOneAndRemove({_id :mongoose.mongo.ObjectID(req.params.id)},(err,docs)=>{
if(!err){
res.render("student/list",{
	viewTitle:"Update Student Data",
	student:docs
});
}
else{}
})
);
module.exports=route;