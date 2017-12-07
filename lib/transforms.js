'use strict';

const transforms = module.exports = {};

transforms.invert = (bitmap, callback) => {
  if(!bitmap || !Buffer.isBuffer(bitmap.buffer))
    callback(new Error('must provide a valid buffer'));

  for(let i = 0; i<bitmap.colorTable.length; i+=4){
    bitmap.colorTable[i] = Math.abs(255-bitmap.colorTable[i]);
    bitmap.colorTable[i+1] = Math.abs(255-bitmap.colorTable[i+1]);
    bitmap.colorTable[i+2] = Math.abs(255-bitmap.colorTable[i+2]); //TODO: ask why abs
  }
  console.log('performed invert transformation');

  if(callback)
    callback(null, bitmap);
};
