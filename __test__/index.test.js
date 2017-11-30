'use strict';

const reader = require('../lib/reader');
const reader = require('../lib/reader');

describe('bitmap.js', () =>{

})



test('file contents should be returned in order based on input array', done => {
  let filePaths = [
    `${__dirname}/../assets/mario.txt`,
    `${__dirname}/../assets/peach.txt`,
    `${__dirname}/../assets/luigi.txt`,
  ];
  reader.readFiles(filePaths, (error,data) => {
    expect(data[0]).toEqual('mario');
    expect(data[1]).toEqual('peach');
    expect(data[2]).toEqual('luigi');
    done();
  });
});
