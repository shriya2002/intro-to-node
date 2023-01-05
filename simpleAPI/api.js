// const express = require("express")
// const app = express()
// const bodyParser =  require("body-parser")
// app.use(bodyParser.urlencoded({extended:true}))

// const port = 4000

// let bookList = ['javascript','python']
 
// app.get("/",(req,res)=>{
//     res.send("hello there")

// })
// app.get("/book", (req, res) => {
//    return res.json({allbooks :bookList});
// });

// app.post("/book", (req, res) => {
//     const bookName = req.body.name

//     if(bookList.includes(bookName)){
//         res.json({success:false})
//     }
//     bookList.push(bookName)
// return res.json({ success:true});
// });
// app.listen(port,(err)=>{
// if(err){
//     throw err
// }
// console.log("the server is setup propoerly and listening on the port 4000")
// })


const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const { response } = require("express")
app.use(bodyParser.urlencoded({extended:true}))
const port =4000
let bookList = [
        "java",
        "javascirpt"

    ]
app.get("/books",(req,res)=>{
    
    res.send({bookList})
})

app.post("/books",(req,res)=>{
    const bookName = req.body.name
    if(bookList.includes(bookName)){
        res.send({success:false})
    
    }
    else{
        bookList.push(bookName)
        res.send({success:true})
    }
})

app.delete("/books",(req,res)=>{
    const bookDeleted = req.body.name
    bookList = bookList.filter((a)=>
        a !== bookDeleted

    )
    res.json({bookList})
})

app.put("/books",(req,res)=>{

    const bookToUpdate = req.body.name
    const updatedBook = req.body.updateName

    bookIndex = bookList.findIndex((a)=>
        a === bookToUpdate)
    
    if(bookIndex === -1)
    {
        return res.send({success:false})
    }
    bookList[bookIndex]=== updatedBook
    return res.send({success:true})
})

app.listen(port,(err)=>{
    if(err){
        throw err
    }
    console.log("the server is listeing on the port 4000")
})