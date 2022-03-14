/*
* Title: Routes Handle
* Description: A RESTFul API to monitor up or down time of user defined links
* Optional Description: Only Using Raw Node Js
* Author: Mohammad Mohitul Islam
* Date: 3/13/2022
*/

//Dependencis
const { sampleHandler } = require('./handlers/routes/samplehandler');


//Routes
const routes = {
    sample: sampleHandler,
};

module.exports = routes;