const express = require('express');
const app = express();
const dotenv = require('dotenv');
const errorMiddleware = require('./middleWare/error');
const cookiesParser = require('cookie-parser');
const path = require('path')
dotenv.config({path:path.join(__dirname,"config/config.env")});



app.use(express.json());
app.use(cookiesParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))


const products = require('./Routes/product')
const auth = require('./Routes/auth')
const order = require('./Routes/order')
const payment = require('./Routes/payment')


app.use('/api/v1',products);
app.use('/api/v1',auth);
app.use('/api/v1',order);
app.use('/api/v1',payment);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,'../front-end/build')));
    app.get('*',(req,res) =>{
        res.sendFile(path.resolve(__dirname,'../front-end/build/index.html'))
    })
}
app.use(errorMiddleware)
module.exports = app