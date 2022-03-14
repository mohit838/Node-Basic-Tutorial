/*
* Title: Data Read and Write
* Description: A RESTFul API to monitor up or down time of user defined links
* Optional Description: Only Using Raw Node Js
* Author: Mohammad Mohitul Islam
* Date: 3/14/2022
*/

//Dependencies
const fs = require('fs');
const path = require('path');

const lib = {};

//Data file path
lib.pathDir = path.join(__dirname, '/../.data');


//Data write Files
lib.create = (dir, file, data, callback) => {
    //Open file
    fs.open(lib.pathDir +'/'+ dir+'/'+file+'.json','wx', (err, fileDescription) => {
        if(!err && fileDescription){
            
            //converting data into json
            const stringData = JSON.stringify(data);
            
            //write data to file
            fs.writeFile(fileDescription, stringData, (err) => {
                if(!err){
                    fs.close(fileDescription, (err) => {
                        if(!err){
                            callback(false);
                        }else {
                            callback('Error Closing file!');
                        }
                    });
                }
                else{
                callback('Error writing file!');
                }
            });
        }
        else {
            callback('File exists!!!');
            callback(err);
        }
    });
}

module.exports = lib;