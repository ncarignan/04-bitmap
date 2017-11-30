'use strict';


const bitmap = require('.lib/bitmap');
const fs = require('fs');

fs.readFile(`${__dirname}/assets/house.bmp`, (error, data) => {
  if(error){
    console.error(error);
    return;
  }

  let parsedBitmap = bitmap.parseBitmap(data);
  console.log(parsedBitmap);
});

// let stringBuffer = Buffer('The Hound');

// console.log(`Buffer as a string: ${stringBuffer.toString()}`);
// console.log(`Buffer as hex`);
// console.log(stringBuffer);

// console.log(`Extracting only one character`);
// console.log(stringBuffer.readUInt8(0));

// console.log(stringBuffer.toString('hex'));
// console.log(stringBuffer.toString('base64'));

// let fromBase64 = Buffer.from('VGhlIEhvdW5k', 'base64');
// console.log(fromBase64.toString());

// let fromBase64 = Buffer.from('VA==', 'base64');
// console.log(fromBase64.toString());

// console.log(stringBuffer.readUInt8(0));
// console.log(stringBuffer.readUInt8(1));
// //
// console.log(stringBuffer.readUInt16LE(0));

// stringBuffer.fill(97);
// stringBuffer.writeUInt8(97,5);
// stringBuffer.write('and Sir Gregor');//size of the buffer stays constant, the result is 'and Sir G'

// console.log(stringBuffer);
// console.log(stringBuffer.toString());

// console.log(stringBuffer.readUInt16LE(0).toString());
// console.log(stringBuffer.readUInt16LE(2));
// console.log(stringBuffer.readUInt16LE(4));
// console.log(stringBuffer.readUInt16LE(6));
// console.log(stringBuffer.readUInt16LE(8));
