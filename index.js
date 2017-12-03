'use strict';

const greyscale = require('./lib/greyscale.js');
const invert = require('./lib/invert.js');
const chaos = require('./lib/chaos.js');


const bitmap = require('./lib/bitmap.js');
const fs = require('fs');

const bitmapper = module.exports = {};

bitmapper.writer = (inputPaths, outputPaths, transformName, callback) =>{
  let results = [];

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
