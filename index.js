//Declare http server
const http = require("http");

//Declare express
const express = require("express");

//create app
const app = express();

//create server
const server = http.createServer(app);

//create Port
const port = process.env.PORT || 3000;

//create listener
server.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})
