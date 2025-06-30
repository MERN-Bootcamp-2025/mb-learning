const http = require('http');

const getTimestamp = ()=>{
    return new Date().toISOString();
}

const server = http.createServer((req, res)=>{
    console.log(`[${getTimestamp()}] ${req.method} ${req.url}`);

    res.setHeader('Content-Type', 'text/html');

    switch(req.url){
        case '/':
            res.writeHead(200);
            res.end(`<h1>This is home route</h1>`);
            break;
        case '/about':
            res.writeHead(200);
            res.end(`<h1>This is about route</h1>`);
            break;
        case '/about':
            res.writeHead(200);
            res.end(`<h1>This is about route</h1>`);
            break;
        default:
            res.writeHead(404);
            res.end(`<h1>404 Page not found</h1>`);
            break;
    }

});

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`[${getTimestamp()}] Server is running on port: ${PORT}`);
});