'use strict';

// const bitmap = require('./lib/bitmap.js');
const bitmapper = require('../index');

describe('bitmap.js', () =>{
  test('should return array of 4 parsedBitmap objects', done => {
    let filePaths = [
      `${__dirname}/assets/bitmap.bmp`,
      `${__dirname}/assets/finger-print.bmp`,
      `${__dirname}/assets/house.bmp`,
      `${__dirname}/assets/non-palette-bitmap.bmp`,
    ];
    bitmapper.parser(filePaths, (error,data) => {
      expect(typeof data[0]).toBe('object');
      expect(typeof data[1]).toBe('object');
      expect(typeof data[2]).toBe('object');
      expect(typeof data[3]).toBe('object');
      done();
    });
  });
  test('should return error callback if a filepath is bad', done => {
    let filePaths = [
      `${__dirname}/assets/bitmaaaaaaaap.bmp`,
      `${__dirname}/assets/finger-print.bmp`,
      `${__dirname}/assets/house.bmp`,
      `${__dirname}/assets/non-palette-bitmap.bmp`,
    ];
    bitmapper.parser(filePaths, (error,data) => {
      expect(error).not.toBeNull();
      done();
    });
  });
});
