// Use dotenv in development
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//Needed to make requests from front end to back end.
const cors = require('cors');
app.use(cors());

app.get('/',(req,res,next)=>{
    res.send('Great things are brewing!')
});

app.listen(port,()=>{
    console.log('connected')
})