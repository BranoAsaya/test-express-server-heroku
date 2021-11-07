
const express = require("express"),
   app = express() ;

require("dotenv").config()

app.get("*",(req,res)=>{
res.send("Hello world")
})

console.log("test");
const PORT = process.env.PORT
app.listen(PORT)
