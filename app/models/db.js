const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/students', { useUnifiedTopology: true ,useNewUrlParser: true},
	(err)=>{
	if(!err){
        console.log('Database Connected succesfully');
    }
    else {
        console.log('Database Not Connected'+err);
    }
	});


require('./student.model');