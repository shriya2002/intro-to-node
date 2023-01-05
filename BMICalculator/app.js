const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
const port = 3000


app.get('/bmi', (req, res) => {

    res.sendFile(__dirname+"/index.html")
})

app.post("/bmi",(req,res)=>{
    var num1 =Number(req.body.height)
    var num2 =Number(req.body.weight)
    var result = num2/(num1*num1)
    result = result.toFixed()
    console.log(result)
    res.send("sum "  + result )
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


