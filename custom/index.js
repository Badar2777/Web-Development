const http = require('http');
const fs = require('fs');
const home = fs.readFileSync('index.html')
const about = fs.readFileSync('about.html')
const services = fs.readFileSync('services.html')
const contact = fs.readFileSync('contact.html')

const server = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-type": 'text/html'});
    console.log(req.url);
    url = req.url;
    if( url == '/'){
        res.end(home);
    }
    else if( url == '/about'){
        res.end(about)
    }

    else if( url == '/services'){
        res.end(services)
    }

    else if( url == '/contact'){
        res.end(contact)
    }
})

server.listen(3000, '10.223.116.60', ()=>{
    console.log("The server is listening on port 3000")
})