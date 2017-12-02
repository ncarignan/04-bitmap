'use strict';

const chaos = module.exports = {};
// const bitmapper = require('../index.js');

// for(let i = 0; i<buffer.length; i+= 4){
//   change r g b
// }
// let paths = [`${__dirname}/__test__/assets/house.bmp`];

chaos.chaos = (objectArray, callback) =>{
  console.log('lets change something');
  console.log(objectArray);
  // change color properties here
  // console.log(objectArray);
  for(let object of objectArray){
    object.slicedColorTable.forEach((value, position, array) => {
      if(position % 4 === 1) { //r
        console.log('old value', value);
        object.slicedColorTable.writeUInt8(position, position);
        console.log('new value', value);
      }
      if(position % 4 === 2) { //g
        console.log('old value', value);
        object.slicedColorTable.writeUInt8(array[position-1], position);
        console.log('new value', value);
      }
      if(position % 4 === 3) { //b
        console.log('old value', value);
        object.slicedColorTable.writeUInt8(array[position-1], position);
        console.log('new value', value);
      }
    });
  }
  // console.log('first object: ', objectArray[0]);
  callback(null, objectArray);

};
