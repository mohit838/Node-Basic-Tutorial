/*
* Title: Uptime Monitoring Application
* Description: A RESTFul API to monitor up or down time of user defined links
* Optional Description: Only Using Raw Node Js
* Author: Mohammad Mohitul Islam
* Date: 3/10/2022
*/


//Dependencis
const http = require('http'); //HyperText Transfer Protocol
const { handlerReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environment');
const data = require('./lib/data');

//App object or App Scaffolding
const app = {};


//Testing functions
//File create
// data.create('test', 'newfile2', {name: 'test', file: 'newfile'}, (err) => {
//     console.log('Error was: ', err);
// })

//File read
data.read('test', 'newfile1', (err, data) => {
    console.log(err, data);
})


//Create Servery
app.createServer = () => {
    const server = http.createServer(app.handleRequest);
    server.listen(environment.port, () => {
        console.log(`Server is running at ${environment.port}`);
    });
};

//Request and Response Handler
app.handleRequest = handlerReqRes;

//Start Server
app.createServer();




