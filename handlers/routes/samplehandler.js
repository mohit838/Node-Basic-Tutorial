/*
* Title: Sample Handler
* Description: A RESTFul API to monitor up or down time of user defined links
* Optional Description: Only Using Raw Node Js
* Author: Mohammad Mohitul Islam
* Date: 3/12/2022
*/


//App object or App Scaffolding
const handler = {};

handler.sampleHandler = (requestPropertices, callback) => {
    callback(200, {
        message: 'This is 200 OK',
    });
};


module.exports = handler;