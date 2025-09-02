const express = require('express');
const app = express();

app.get("/", (req,res)=>{
   res.status(200).send("This is the home page")
})

app.get("/about", (req,res)=>{
   res.status(200).send("This is the about page")
})

app.listen(80, '127.0.0.1')