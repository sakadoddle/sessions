const express = require('express');
const app = express();                                              // We need to call express() to initialize the server
const bodyParser = require('body-parser')                           // Package use to parse POST body 
const product = require('./productList');                           // Import product json from different module
const looger = require('./middleware/logger')
const permission = require('./middleware/permission')
const path = require('path');



app.use('/public', express.static(__dirname + '/navbar'))



/*
app.use is implementation of middleware
*/

// parse application/json
app.use(bodyParser.json())


// req -> middleware -> res


app.get('/', looger, (req, res) => {
    res.send('HomePage Get')                                        // res.send is used to send data content from server to client
})

app.get('/profile', looger, permission, (req, res) => {
    console.log(path.resolve(__dirname, './navbar/index.html'))
    res.sendFile(path.resolve(__dirname, './navbar/index.html'))
})


app.get('/products', looger, permission, (req, res) => {
    console.log(req.url);

    const { query } = req;
    const pageLimit = query.per_page;


    const productFilter = product.slice(0, pageLimit)                  //  .slice(<FROM ARRAY INDEX>, <TO ARRAY INDEX>)

    res.json(productFilter)                                             // .json is use to send json content instead of HTML or text content. Mainly use for API development
})




app.get('/products/:product_name', looger, permission, (req, res) => {
    console.log(req.url);
    const productName = req.params.product_name;                        // req.params: Used to extract dynamic route value


    const result = product.filter(ele => ele.name === productName);

    res.json(result);
})


app.post('/', looger, permission, (req, res) => {
    console.log(req.url);
    console.log(req.body)                                                   // req.body: Will be only accessable if the body-parser addon is used
    res.send('HomePage POST')
})


app.all('*', (req, res) => {
    console.log(req.url);                                            // Route will be triggered when non of above route rule is not matched
    res.status(404).send('Not found')
})


app.listen(3000, () => {                                                        // Defines the server PORT                           
    console.log('Server Runnnig on port 3000');
})

