//Declare http server
const http = require("http");

//Declare express
const express = require("express");

//Declare path
const path = require("path");

//Declare stream
const fs = require("fs");

//create app
const app = express();

//create server
const server = http.createServer(app);

//read path of json file
const fileJson = path.join(process.cwd(),"./members.json");
const readJson = JSON.parse(fs.readFileSync(fileJson,'utf-8'));

//create get API
app.get('/api/v1/members',(req,res,next)=>{
    res.status(200).json({
        status : "success",
        data : {
            readJson,
         }
    })
})

//create Port
const port = process.env.PORT || 3000;

//create listener
server.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})
