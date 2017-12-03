'use strict';

// const bitmap = require('./lib/bitmap.js');
const bitmapper = require('../index');
const chaos = require('../lib/chaos');



describe('index.js', () =>{
  describe('bitmapper.writer', () => {
    test('chaos.chaos should create 3 files with transformations and changed file name', done => {
      let inputPaths = [
        `${__dirname}/assets/bitmap.bmp`,
        `${__dirname}/assets/finger-print.bmp`,
        `${__dirname}/assets/house.bmp`,
      ];
      let transformName = 'chaos';

      let outputPaths = [
        `${__dirname}/../__test__/dump/bitmap-${transformName}.bmp`,
        `${__dirname}/../__test__//dump/finger-print-${transformName}.bmp`,
        `${__dirname}/../__test__/dump/house-${transformName}.bmp`,
        `${__dirname}/../__test__/dump/non-palette-bitmap-${transformName}.bmp`,
      ];

      bitmapper.writer(inputPaths, outputPaths, transformName, (error,data) => {
        expect(data[0].buffer).not.toBeNull();
        expect(data[1].buffer).not.toBeNull();
        expect(data[2].buffer).not.toBeNull();
        done();
      });
    });
    test('greyscale.greyscale should create 3 files with transformations and changed file name', done => {
      let inputPaths = [
        `${__dirname}/assets/bitmap.bmp`,
        `${__dirname}/assets/finger-print.bmp`,
        `${__dirname}/assets/house.bmp`,
      ];

      let transformName = 'greyscale';
      let outputPaths = [
        `${__dirname}/../__test__/dump/bitmap-${transformName}.bmp`,
        `${__dirname}/../__test__//dump/finger-print-${transformName}.bmp`,
        `${__dirname}/../__test__/dump/house-${transformName}.bmp`,
        `${__dirname}/../__test__/dump/non-palette-bitmap-${transformName}.bmp`,
      ];

      bitmapper.writer(inputPaths, outputPaths, transformName, (error,data) => {
        expect(data[0].buffer).not.toBeNull();
        expect(data[1].buffer).not.toBeNull();
        expect(data[2].buffer).not.toBeNull();
        done();
      });
    });
    test('invert.invert should create 3 files with transformations and changed file name', done => {
      let inputPaths = [
        `${__dirname}/assets/bitmap.bmp`,
        `${__dirname}/assets/finger-print.bmp`,
        `${__dirname}/assets/house.bmp`,
      ];

      let transformName = 'invert';
      let outputPaths = [
        `${__dirname}/../__test__/dump/bitmap-${transformName}.bmp`,
        `${__dirname}/../__test__//dump/finger-print-${transformName}.bmp`,
        `${__dirname}/../__test__/dump/house-${transformName}.bmp`,
        `${__dirname}/../__test__/dump/non-palette-bitmap-${transformName}.bmp`,
      ];

      bitmapper.writer(inputPaths, outputPaths, transformName, (error,data) => {
        expect(data[0].buffer).not.toBeNull();
        expect(data[1].buffer).not.toBeNull();
        expect(data[2].buffer).not.toBeNull();
        // expect(data[1].buffer).not.toBeNull();
        // expect(data[2].buffer).not.toBeNull();
        done();
      });
    });
    test('should return error callback if a filepath is bad', done => {
      let inputPaths = [
        `${__dirname}/assets/bitmapp.bmp`,
        `${__dirname}/assets/finger-print.bmp`,
        `${__dirname}/assets/house.bmp`,
      ];

      let transformName = 'invert';
      let outputPaths = [
        `${__dirname}/../__test__/dump/bitmap-${transformName}.bmp`,
        `${__dirname}/../__test__//dump/finger-print-${transformName}.bmp`,
        `${__dirname}/../__test__/dump/house-${transformName}.bmp`,
        `${__dirname}/../__test__/dump/non-palette-bitmap-${transformName}.bmp`,
      ];

      bitmapper.writer(inputPaths, outputPaths, transformName, (error,data) => {
        expect(error).not.toBeNull();
        done();
      });
    });
  });
});
