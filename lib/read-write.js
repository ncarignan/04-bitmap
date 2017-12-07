'use strict';

const bitmap = require('./bitmap.js');
const fs = require('fs');
const transforms = require('./transforms.js');

const readWrite = module.exports = {};

readWrite.readBMP = (bmpPath, transform, callback) => {
  if(!bmpPath)
    callback(new Error('READ-WRITE ; must provide a valid path'));

  fs.readFile(`${__dirname}/../assets/${bmpPath}`, (error, bitmapFile) => {
    if(error){
      callback(error);
      console.error(error);
    }
    console.log('read source bmp');

    if(callback){
      transforms[transform](bitmap.parseBitmap(bitmapFile), callback);
    }
  });
};

readWrite.writeBMP = (bmpPath, parsedBitmap, callback) => {
  if(!bmpPath)
    callback(new Error('READ-WRITE : must provide a valid path'));
  if(!parsedBitmap.buffer || !Buffer.isBuffer(parsedBitmap.buffer))
    callback(new Error('READ-WRITE : must provide a valid parsedBitmap'));

  fs.writeFile(`${__dirname}/../dump/${bmpPath}`, parsedBitmap.buffer, (error, data) => {
    if(error)
      callback(error);

    if(callback)
      callback(null, data);

    return null;
  });
};
