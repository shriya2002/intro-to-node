//jsHint esversion:6
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
res.writeHead(200, { "Content-Type": "application/json" });
console.log("server is running");
  const jsonData = {
    id: "0001",
    type: "donut",
    name: "Cake",
    ppu: 0.55,
    batters: {
      batter: [
        { id: "1001", type: "Regular" },
        { id: "1002", type: "Chocolate" },
        { id: "1003", type: "Blueberry" },
        { id: "1004", type: "Devil's Food" },
      ],
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5005", type: "Sugar" },
      { id: "5007", type: "Powdered Sugar" },
      { id: "5006", type: "Chocolate with Sprinkles" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" },
    ],
  };

 
  res.end(JSON.stringify(jsonData))

});
server.listen(5040, (err) => {
  if (err) {
    throw err;
  }
  console.log("server is working");
});
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'})
//     fs.readFile('index.html',(err,data)=>{
//         if(err){
//             throw err;
//         }
//         res.end(data)
//     })
// }).listen(3000)
