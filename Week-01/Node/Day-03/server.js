const http = require('http');
const url = require('url');
const PORT = 3000;

function sendjson(res, status, data){
    res.writeHead(status,{'Content-type':'application/json'});
    res.end(JSON.stringify(data));
}

const server = http.createServer((req,res)=>{
    const parsed = url.parse(req.url,true);
    const path = parsed.pathname;
    const method = req.method;

    if(path !== '/api'){
        sendjson(res,404,{error: 'Route not found'});
        return;
    }

    if(method === 'GET'){
        const name = parsed.query.name || 'Admin';
        sendjson(res,200,{message:`Hello, ${name}`});
    }else if(method === 'POST' || method === 'PUT'){
        let body ='';
        req.on('data',chunk => (body += chunk));
        req.on('end',()=>{
            try{
                const data = JSON.parse(body);
                sendjson(res,200,{
                    message: `${method} received`,
                    data: data
                });
            }catch{
                sendjson(res,404,{error: 'Invalid JSON'});
            }
        });
    }else if(method === 'DELETE'){
        sendjson(res,200,{message:'Deleted Successfully!'});
    }else{
        sendjson(res, 405,{error: 'Method Not allowed'});
    }
});

server.listen(PORT,()=>{
    console.log(`Server is running on port : ${3000}`);
})