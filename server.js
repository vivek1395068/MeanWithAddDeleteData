var express = require("express");
var app = express();
var path =require("path")


app.use(express.static(path.join(__dirname,"dist/angularexpress")));


app.get("/",function(req,res){
    res.sendfile(path.join(__dirname,"dist/angularexpress/index.html"))
});


app.listen(8080,(req,res)=>{
    console.log("Running on the port 8080")
})