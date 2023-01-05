const express = require("express")
const EventEmmitter = require("events")
const event = new  EventEmmitter();

const app = express();
const port =4000

let count  = 0;
event.on("apiCount",()=>{
    count ++;
    console.log("APIcount",count)
})
app.get("/", (req,res)=>{
    res.send("hello")
    event.emit("apiCount")
})
app.listen(port,(err)=>{
    if(err){
        throw err
    }
    console.log("the server is listening on the port 4000")
})