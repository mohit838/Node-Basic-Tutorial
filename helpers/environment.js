/*
* Title: Environment Setup
* Description: A RESTFul API to monitor up or down time of user defined links
* Optional Description: Only Using Raw Node Js
* Author: Mohammad Mohitul Islam
* Date: 3/10/2022
*/

//Dependencies
// For node module npm install "win-node-env" {Not working / Unclear}

//Module Scaffolding
const environment = {};

environment.staging = {
    port: 3000,
    envName: 'staging',
};

environment.production = {
    port: 5000,
    envName: 'production',
};


//Determining the current environment
const currentEnvironment = typeof (process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging';

const environmentToExport = typeof (environment[currentEnvironment]) === 'object' ? environment[currentEnvironment] : environment.staging;


//Export Module
module.exports = environmentToExport;