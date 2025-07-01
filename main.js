const express = require('express')
const app = express()


app.get("/user",(req,res)=>{
    res.end('hello')
})
app.listen(4000,()=>{
    console.log("server is running");
    
})