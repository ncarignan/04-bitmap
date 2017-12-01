'use strict';

const chaos = module.exports = {};
const bitmapper = require('../index.js');

// for(let i = 0; i<buffer.length; i+= 4){
//   change r g b
// }
let paths = [`${__dirname}/__test__/assets/house.bmp`];

chaos.chaos = (objectArray, callback) =>{
  // change color properties here
  console.log(objectArray);
  for(let object of objectArray){
    for(let i = 0; i<object.colorTableAmount; i++)
      object.buffer.write('334ec6', 55+(i*4), 3);
  }
  console.log(objectArray[0]);
  callback(null, objectArray);

};
// console.log('first iteration');
bitmapper.testObjectArray = bitmapper.parser(paths, (error, results) => {console.log(results); console.log(error);});
chaos.chaos(bitmapper.testObjectArray, (error, results) => {console.log(results); console.log(error);});
