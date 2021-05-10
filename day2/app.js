// HTTP SESSION

const http = require('http');                                                     // http is node global packages used to create server



const server = http.createServer((req, res) => {                                   //  createServer intialize the server for nodejs
    /*
        content-type : Define the type of payload of response
        demo : its the sample key for any kind of header key/value name can be different as you like
    */
    res.writeHead(200, { 'content-type': 'text/html', 'demo': 'test123' })          // writeHead (<Status code>, <Header JSON>)
    res.write('test')                                                               // Body parameter for response
    res.end()                                                                       // End the request
})

server.listen(3000);                                                                // Listen the server to port 3000 or any port in your local terminal


