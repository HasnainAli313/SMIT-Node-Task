import {createServer} from 'http';

const server = createServer((req,res)=>{
    let url = req.url;

    if(url === "/"){
    res.writeHead(200,{'Content-Type' :'application/json'});
    res.end("This is (default) home page")

    }
})