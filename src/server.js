const express = require("express"),
  app = express(),
  PORT = 8080;



app.get("*",(req,res)=>{
res.send("Hello world")
})

console.log("test");
app.listen(PORT)
