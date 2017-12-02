'use strict';

const chaos = module.exports = {};
const bitmapper = require('../index.js');
const fs = require('fs');


// for(let i = 0; i<buffer.length; i+= 4){
//   change r g b
// }
// let paths = [`${__dirname}/__test__/assets/house.bmp`];

chaos.chaos = (objectArray, callback) =>{
  // console.log('lets change something');
  // console.log(objectArray);
  // change color properties here
  // console.log(objectArray);
  for(let object of objectArray){
    object.slicedColorTable.forEach((value, position, array) => {
      if(position % 4 === 1) { //r
        // console.log('old value', value);
        object.slicedColorTable.writeUInt8(array[position-1], position);
        // console.log('new value', value);
      }
      if(position % 4 === 2) { //g
        // console.log('old value', value);
        object.slicedColorTable.writeUInt8(array[position-1], position);
        // console.log('new value', value);
      }
      if(position % 4 === 3) { //b
        // console.log('old value', value);
        object.slicedColorTable.writeUInt8(array[position-1], position);
        // console.log('new value', value);
      }
    });
  }
  return(objectArray[0].buffer);

  // console.log('first object: ', objectArray[0]);
  // let newPaths = [`${__dirname}/__test__/assets/bitmaptest.bmp`];
  // console.log('object array is', objectArray);
  // for(let i in objectArray){
  //   // console.log(newPaths[i], objectArray[i].buffer);
  //   fs.writeFile(`bitmaptest.bmp`, objectArray[i].buffer);
  // }
  callback(null, objectArray);
};
