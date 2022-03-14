/*
* Title: Request and Response handle
* Description: A RESTFul API to monitor up or down time of user defined links
* Optional Description: Only Using Raw Node Js
* Author: Mohammad Mohitul Islam
* Date: 3/12/2022
*/


//Dependecis
const url = require('url'); //Uniform Resource Locators
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routes/notFound');


//App object or App Scaffolding
const reqResHandle = {};


reqResHandle.handlerReqRes = (req, res) => {
    //request handle
    
    //url parse
    const parseUrl = url.parse(req.url, true);
    // console.log(parseUrl);
    
    const path = parseUrl.pathname;
    
    //Trimming path 
    const trimPath = path.replace(/^\/+|\/+$/g, '');
    
    //Using method (POST or GET)
    const method = req.method.toLowerCase();
    
    //Queries
    const querieString = parseUrl.query;
    
    //Headers
    const headersObj = req.headers;
    // console.log(headers);
    
    
    const requestPropertices = {
      parseUrl,
      path,
      trimPath,
      method,
      querieString,
      headersObj
    };
    
    
    //Playloader or body req
    const decoder = new StringDecoder('utf-8');
    let realData = '';
    
    
    const choosenHandler = routes[trimPath] ? routes[trimPath] : notFoundHandler;
    
    
     req.on('data', (buffer) => {
        realData +=decoder.write(buffer);
     });
    
     req.on('end', () => {
        realData +=decoder.end();
        //console.log(realData);
        
        choosenHandler(requestPropertices, (statusCode, payload) => {
         statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
         payload = typeof(payload) === 'object' ? payload : {};
         
         const playloadString = JSON.stringify(payload);
         
         res.writeHead(statusCode);
         res.end(playloadString);
       });
       
     });
};

module.exports = reqResHandle;