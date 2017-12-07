'use strict';

const readWrite = require('./lib/read-write');

let cliArguments = process.argv.slice(2);

let transform = null;

if(cliArguments[1] === 'invert')
  transform = 'invert';
else {
  console.error('must use invert or etc or etc');
}

let bmpPath = cliArguments[0];
readWrite.readBMP(bmpPath, transform, (error,data) => {
  console.log('ready to process bmp');
  if(error)
    console.error(error);

  readWrite.writeBMP(`${transform}.bmp`, data, (error,data) => {
    if(error)
      console.error(error);

    console.log('transformation completed');
  });
});
