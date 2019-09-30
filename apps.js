// http
//const http = require('http');

const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

app.use('/add-product', (req, res, next)=>{
    console.log('Add Product Middleware');
    res.send('<h1>Add Product Page</h1>')
    
});


app.use('/', (req, res, next)=>{
    console.log('Hello Middleware');
    res.send('<h1>Hello from Express!</h1>')
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);