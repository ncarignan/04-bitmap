'use strict';

const invert = module.exports = {};
const fs = require('fs');


let newPaths = [
  `bitmap-test.bmp`,
  `finger-print-test.bmp`,
  `house-test.bmp`,
  `non-palette-bitmap-test.bmp`,
];



invert.invert = (objectArray, callback) =>{
  for(let i in objectArray){
    objectArray[i].slicedColorTable.forEach((value, position, array) => {
      if(position % 4 === 1) { //r
        // console.log('old value', value);
        objectArray[i].slicedColorTable.writeUInt8(255-array[position], position);
        // console.log('new value', value);
      }
      if(position % 4 === 2) { //g
        // console.log('old value', value);
        objectArray[i].slicedColorTable.writeUInt8(255-array[position], position);
        // console.log('new value', value);
      }
      if(position % 4 === 3) { //b
        // console.log('old value', value);
        objectArray[i].slicedColorTable.writeUInt8(255-array[position], position);
        // console.log('new value', value);
      }
    });
    fs.writeFile(newPaths[i], objectArray[i].buffer);
  }
  // callback(null, objectArray);
  callback(null, objectArray);
};
