const mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var studentSchema = new Schema({
    fullName: {
        type: String
    },
    enroll: {
    	type: String
    },
    email: {
    	type: String
    },
    mobile:  {
    	type: String
    },
    date: { type: Date, default: Date.now },
  
  });

  mongoose.model('students', studentSchema);