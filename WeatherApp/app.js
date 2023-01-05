const express = require("express")
const app  = express();
const axios  = require("axios")
const bodyParser = require("body-parser");
const port = 4000

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/",(req,res)=>{
    res.sendFile(__dirname +'/index.html')
})

app.post("/", async(req, res) => {
    const cityName = req.body.city
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=53d6aa75848254d0e5dccb67b191f5f2&units=metric
`;
    let weatherData = await axios.get(URL)
    console.log(cityName)
  res.send("checking the post functionality")
});


app.listen(port,(err)=>{
    if(err){
        throw err
    }
    else{

        console.log("the server is listening on port 4000")
    }
})