const http = require('http');
const path = require('path');
const url = require('url');


const PORT = 3000;

//Log every incoming request
function logRequest(req){
    const {method, url: path} = req;//destructuring
    console.log(`[${new Date().toISOString()}] ${method} ${path}`);
}

//HTML page with basic layout

function renderPage(title,content){
    return `
      <!DOCTYPE html>
      <html>
      <head>
      <title>${title}</title>
      <style>
         body {margin:0; font-family: monospace; background: #601A35; color: #fffff0; font-size:30px}
         header, footer {background:rgb(172, 76, 112); color: #fffff0; padding: 10px; text-align: center;}
         footer{position:fixed; bottom:0; width:100%}
         main {padding: 20px;}
         a {color: purple; text-decoration: none;}
         form{max-width:200px; display: flex; flex-direction: column; align-items: space-between; justify-contents: center; gap:10px}
         input{height: 50px; width: 200px ; color: black; border-radius: 10px; border: 1px solid black; padding:10px}
         textarea{height:200px; width:200px; color: black; border-radius: 10px; border: 1px solid black; padding:10px}
         button{padding:20px 20px; border-radius: 10px; background: blue; color: #fffff0}
      </style>
      </head>

      <body>
         <header><h1>${title}</h1></header>
         <main>${content}</main>
         <footer><p>&copy; 2025 Simple Server Page</p></footer>
      </body>
      `

}

const server = http.createServer((req,res)=>{

    logRequest(req);

    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;
    res.setHeader('Content-Type','text/html');

    //Routing Logic

    if(method === 'GET'){
        if(path === '/'){
            res.writeHead(200);
            res.end(renderPage('Home',`<p>Welcome to my Server Page.</p><a href="/about">About</a> | <a href="/contact">Contact</a>`));
        }else if(path === '/about'){
            res.writeHead(200);
            res.end(renderPage('About Me',`<p>Hiee I am Arzoo, learning Node JS and React JS is like my everday job!</p>`));
        }else if(path === '/contact'){
            res.writeHead(200);
            res.end(renderPage('Contact Me',`
                <p>Email: arzoo.jain@gmail.com</p>
                <form method="POST" action="/contact">
                <input type="text" placeholder="Enter your name" name="name"/>
                <textarea name="message" placeholder="Enter message"></textarea>
                <button type="submit">Submit</button>
                </form>
            `));
        }else{
            res.writeHead(400);
            res.end(renderPage('404 Not Found',`<p>Oops! the page you are looking, doesn't exists.</p>`));
        }
    }else if(method === "POST" && path === '/contact'){
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end',()=>{
            res.writeHead(200);
            res.end(renderPage('Thanks!',`<p>Thankyou for contacting!</p>`))
        });
    }else{
        res.writeHead(405);
        res.end('Method Not Allowed');
    }
});

server.listen(PORT,()=>{
   console.log(`Server is running on the port : ${PORT}`);
});