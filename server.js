require('./app/models/db');

const express=require('express');
const controller=require('./app/controllers/controller');
const path=require('path');
const exphbs=require('express-handlebars');
const bodyparser=require('body-parser');

var app=express();
app.use(bodyparser.urlencoded({
	extended:true
}));
app.use(bodyparser.json());
app.set('views',path.join(__dirname,'/app/views/'));
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'mainLayout',layoutsDir:__dirname+'/app/views/layouts'}));
app.set('view engine','hbs');
app.listen(3000,()=>{
console.log('Express server started');
});

app.use('/student',controller);