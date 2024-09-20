import {createServer} from "http";

const PORT = 3000;

const server = createServer((req,res)=>{

    // getting from req 
    const {method ,url} = req;
    const parsedURL = new URL(url,`http://${req.headers.hot}`);

    res.setHeader('Content-Type', 'application/json');

    if(method === 'GET' && parsedURL.pathname === '/api/items'){
        res.statusCode = 200;
        res.end(JSON.stringify({message:'GET Request- Fetching data'}))
    }
})