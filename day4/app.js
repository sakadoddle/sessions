const express = require('express');
const app = express();                                              // We need to call express() to initialize the server
const bodyParser = require('body-parser')                           // Package use to parse POST body 
const product = require('./productList');                           // Import product json from different module



/*
app.use is implementation of middleware
*/

// parse application/json
app.use(bodyParser.json())


/*
app.get('/', (req, res) => {})

.get: Used get some data from server

req: Request from client
res: Response from server to client

/ : Path of the URL 
*/

app.get('/', (req, res) => {
    res.send('HomePage Get')                                        // res.send is used to send data content from server to client
})


app.get('/products', (req, res) => {

    /*
        req.query is used to extract query paramter from url 
        i.e  http://localhost:3000/product?per_page=2

            per_page is query parameter here 
    */


    /* 
    const { query } = req; is same as const query = req.query;

    if you want to get multiple value from req then you can do ths 
     const { query, method. url } = req;

     So query, method, url varaiable will be available for user
    
    */

    const { query } = req;
    const pageLimit = query.per_page;

    /*
        product.slice(0, pageLimit)

        0 : From where  array index start
        pageLimit:  End of arrary index which need to be removed


    */
    const productFilter = product.slice(0, pageLimit)                  //  .slice(<FROM ARRAY INDEX>, <TO ARRAY INDEX>)

    res.json(productFilter)                                             // .json is use to send json content instead of HTML or text content. Mainly use for API development
})


/*

app.get('/products/:product_name', (req, res) => {})

:product_name: Dynamic paramter can be passed if path starts with  " : "

*/

app.get('/products/:product_name', (req, res) => {
    const productName = req.params.product_name;                        // req.params: Used to extract dynamic route value


    /*
        .filter: Used to filter arrary 


        product.filter(ele => ele.name === productName)
            Above code compares the name from array and productName from dynamic route data , if its match it only send the match array value

    */

    const result = product.filter(ele => ele.name === productName);

    res.json(result);
})



/*

.post: Mostly used for to add data from form (Bascially its used to get user multiple data )
*/
app.post('/', (req, res) => {
    console.log(req.body)                                                   // req.body: Will be only accessable if the body-parser addon is used
    res.send('HomePage POST')
})


app.all('*', (req, res) => {                                                   // Route will be triggered when non of above route rule is not matched
    res.status(404).send('Not found')
})


app.listen(3000, () => {                                                        // Defines the server PORT                           
    console.log('Server Runnnig on port 3000');
})

