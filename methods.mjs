import {createServer} from "http";

const PORT = 3000;

const server = createServer((req,res)=>{

    // getting from req 
    const {method ,url} = req;
    const parsedURL = new URL(url,`http://${req.headers.hot}`);

    res.setHeader('Content-Type', 'application/json');

    //GET Method
    if(method === 'GET' && parsedURL.pathname === '/api/items'){
        res.statusCode = 200;
        res.end(JSON.stringify({message:'GET Request- Fetching data'}))
    }

    //POST Method
    else if(method === 'POST' && parsedURL.pathname === '/api/items'){
        let body = "";
        req.on('data',chunk => {
            body += chunk.toString();
        });
        res.on('end',() =>{
            const newItem = JSON.parse(body);
            res.statusCode = 201;
            res.end(JSON.stringify({message:'POST Request- Creating new item',data:newItem}))
        });
    }
    else if(method === "PUT" && parsedURL.pathname.startsWith === '/api/items/'){
        let body = "";
        const itemId = parsedURL.pathname.split('/').pop();

        req.on('data', chunk =>{
            body += chunk.toString();
        });
        res.on("end",() =>{
            const updatedItem = JSON.parse(body);
            res.statusCode = 200;
            res.end(JSON.stringify({message:`PUT Request- Updating item ${itemId}`,data:updatedItem}))
        });
    }
    else if(method === 'DELETE' && parsedURL.pathname.startsWith('/api/items/')){
        const itemId = parsedURL.pathname.split('/').pop();
        res.statusCode = 200;
        res.end(JSON.stringify({message:`DELETE Request- Deleting item ${itemId}`}))
    }

    else{
        res.statusCode(404);
        res.end(JSON.stringify({message:"Route not Found"}))
    }

})