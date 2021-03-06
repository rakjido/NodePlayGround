// http
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    
    if(url === '/message' && method === 'POST'){
        const body = [];
        // data event
        req.on('data', (chunk) => {
            console.log("chunk : ", chunk);
            body.push(chunk);
        });
    
        // end event
        return req.on('end',() => {
            const parsedBody = Buffer.concat(body).toString();
            //console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
        
            });
        });
        
    }
 
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my node.js server</h1></body>')
    res.write('</html>');
    res.end();
});

server.listen(3000);

// https

// fs

// path

// os

