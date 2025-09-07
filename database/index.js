const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express();

app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://127.0.0.1:27017/Badkart")
.then(()=> console.log("Mongodb Connected"))
.catch(()=> console.log("Unable to connect"));

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});
 const User = mongoose.model("User", userSchema);

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.post("/users", async (req,res)=>{
    try{
        const user = new User(req.body)
        await user.save()
        res.send(`The form is submitted successfully! <br>  <a href="/">Go Back</a>`)
    }
    catch (err) {
        res.send("Unable to save data <br> <a href='/'> Go Back </a>")
    }
})

app.listen(80,()=>{
    console.log("The app is listeing on http://localhost:80")
})
