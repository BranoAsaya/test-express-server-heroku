const express = require("express"),
   app = express(),
  PORT = process.env.PORT, ;

require("dotenv").config()

app.get("*",(req,res)=>{
res.send("Hello world")
})

console.log("test");
app.listen(PORT)
