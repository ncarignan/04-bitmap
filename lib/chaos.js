'use strict';

const chaos = module.exports = {};


chaos.chaos = (objectArray, callback) =>{
  //TODO: error check if array already has lenght ===0
  let results = [];
  function colorScrambler(){
    if(objectArray.length === 0)
      callback(null, results);
    else
      // change color properties here

      .readFile(objectArray.shift(), (error,data) => {
        //inside this callback returns a file or error
        if(error){
          callback(error);
          return;
        }

        results.push(chaos.chaos(data));
        parseFilesRecursively();
      });
  }
  // console.log('first iteration');
  parseFilesRecursively();
};
