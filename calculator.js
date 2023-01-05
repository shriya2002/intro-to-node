

const  express = require("express");
const app = express();
 const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended :true}))
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.post("/" ,function(req,res){
   var num1  =Number(req.body.num1);
   var num2 = Number(req.body.num2);
   var result = num1+num2 

   res.send("The value after addition " +result)

})



app.listen(4040,function(){
    console.log("server is starting  on port 3000")
});



