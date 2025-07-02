const express = require('express')
const app = express()


app.use((req,res,next)=>{
    const auth = true
    if(auth){
        next()
    }else{
        res.end('you are not allow');
        
    }
        
})


app.get("/user",(req,res)=>{
    res.end('movie is downloded')
})
app.listen(4000,()=>{
    console.log("server is running");
    
})