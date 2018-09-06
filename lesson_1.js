const fs = require('fs');

const myStaticObj = {
  name: 'Dave'
};
let myDynamicObj = 0;

// console.log(`static obj: ${myStaticObj}`);
// console.log(`dynamic obj: ${myDynamicObj}`);

// console.log(myDynamicObj + 5);
// console.log(myDynamicObj + 1);
myStaticObj.name = 'Kuba';
myStaticObj.atrr = 'test'
console.log(myStaticObj);
// console.log(myStaticObj = myStaticObj + 2);
