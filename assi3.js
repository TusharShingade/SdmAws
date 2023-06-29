var exp =require('express')
var app=exp();
app.get('/login',function(req,res){
res.sendFile(__dirname+"/assi1.html")
});


app.get('/logincheck',function(req,res){
if(req.query.uid=="Tushar" && req.query.pswd=="Tushar@123")
res.send("<h1>Login Successful</h1>");
else
res.send("<h1>Login Failed</h1>")});


app.listen(9000,function(){console.log("Started.....")});
