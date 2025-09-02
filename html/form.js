const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    fs.readFile('html/form.html', 'utf-8', (err,data)=>{
        url = req.url
        if(err){
            res.writeHead(500, {"content-type": 'text/plain'});
            res.write("internal server error")
            res.end()
        }
        else if(url == '/'){
            res.writeHead(200, {"content-type": 'text/html'})
            res.write(data);
            res.end()
        }
        else if (url == '/submit'){
            res.writeHead(201, {"content-type": 'text/html'})
            res.write("<h1>Data Submitted</h1>")
            res.end()
        }
        else{
            res.writeHead(404, {"content-type": 'text/html'})
            res.write("<h1>404 page not fount")
            res.end()
        }
    })
})
server.listen(80)