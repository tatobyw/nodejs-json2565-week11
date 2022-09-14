const http = require('http')

//http://localhost:5000/
http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("Hello")
        res.end()
    } else if (req.url === '/users') { //http://localhost:5000/users
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("<h1>Users Page</h1><hr color='red' />")
        res.end()
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end("<h1><center>404 NOT FOUND</center></h1>")
    }

}).listen(5000)