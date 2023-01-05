
//jsHint esversion:6

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'})
//     fs.readFile('index.html',(err,data)=>{
//         if(err){
//             throw err
//         }
//         res.end(data)
//         console.log("server is rrunning")
//     })
// })
// server.listen(4000, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("server is working");
// });

 
// const validator = require("email-validator");
// const value = validator.validate("test@.com"); // true

//  console.log(value)

// const http = require('http')
// const server = http.createServer((req,res)=>{
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("<h1>Shriya vlaa</h1>")
//     console.log("server is started")
// })

// server.listen(4000,(err)=>{
//     if(err){
//         throw err
//     }
//     console.log("server is running")
// })
//  const express = require('express')
//  const app = express();
//  app.get("/new",(req,res)=>{
//     res.send("hello from rooter side")
//  })
//  app.get("/about" ,(req,res)=>{
//     res.send("hello from about ")
//  })
//  const PORT =4000;
//  app.listen(PORT,(err)=>{
//     if(!err){
//         console.log("server working " + PORT);
//     }
//     else{
//         console.log("error")
        
//     }
   
//  })


// const express = require("express")
// const app = express();
// const PORT = 4000;
// app.get("/",(req,res)=>{
//     res.send("hello normal")
// })
// app.get("/new", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });
// app.listen(PORT,()=>{
//     console.log("server is running on "+PORT)
// })

const express = require("express")
const app = express();
const PORT = 4000

app.get("/",(req,res)=>{
    res.send("hello from /side")
})

app.get("/new",(req,res)=>{
    res.send("hello from / new side")
})
app.listen(PORT,()=>{
    console.log(
        "its working"
    )
})