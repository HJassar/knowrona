const express = require('express');
const app = express();

app.get('/',(req,res,next)=>{
    res.send('Great things are brewing!')
})

app.listen(3000,()=>{
    console.log('connected')
})