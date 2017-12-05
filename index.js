'use strict';

const greyscale = require('./lib/greyscale.js');
const invert = require('./lib/invert.js');
const chaos = require('./lib/chaos.js');


const bitmap = require('./lib/bitmap.js');
const fs = require('fs');

const bitmapper = module.exports = {};


let inputPaths = [];
inputPaths.push(process.argv[2]);

let outputPaths = [];
outputPaths.push(process.argv[3]);

let transformName = process.argv[4];



bitmapper.writer = (inputPaths, outputPaths, transformName, callback) =>{
  let results = [];

  if(typeof callback !== 'function') {
    callback = (error, data) => {return;};
  }
  function parseFilesRecursively(){
    if(inputPaths.length === 0){
      eval(`${transformName}.${transformName}(results, outputPaths, callback)`);
    }else
      fs.readFile(inputPaths.shift(), (error,data) => {
        if(error){
          callback(error);
          return;
        }
        results.push(bitmap.parseBitmap(data));
        parseFilesRecursively();
      });
  }
  parseFilesRecursively();
};

bitmapper.writer(inputPaths, outputPaths, transformName);
