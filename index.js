const express = require('express');
const mongoose = require('mongoose');
const tourRoute = require('./routes/tourRoute');
const toursRoute = require('./routes/toursRoute')
const app = express();
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/test')
.then(()=>console.log('Succesfully Connected'))
.catch((err)=>console.log(err))
// tours route
app.use('/tours',toursRoute);
app.use('/tour',tourRoute);
app.all('*',(req,res)=>{
    res.send('no route matched');
})
// port and listen on port
const port = 5000;
app.listen(port,(req,res)=>{
    console.log('Server is running on port'+" "+port);
})