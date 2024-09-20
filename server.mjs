import {createServer} from 'http';

const server = createServer((req,res)=>{
    let url = req.url;
    
    if(url === "/"){
    res.writeHead(200,{'Content-Type' :'application/json'});
    res.end("This is (default) home page")      
    }
    else if(url === "/about"){
    res.writeHead(200,{'Content-Type' :'application/json'});
    res.end("This is about page")      
    }
    else if(url === "/services"){
    res.writeHead(200,{'Content-Type' :'application/json'});
    res.end("This is services page")      
    }
    else if(url === "/contact-us"){
    res.writeHead(200,{'Content-Type' :'application/json'});
    res.end("This is contact-us page")      
    }
    else{
        res.writeHead(404,{'Content-Type' :'application/json'});
        res.end("Not Found") 
    }
})

server.listen(3000,()=>{
    console.log("server is listening on http://localhost:3000");
})