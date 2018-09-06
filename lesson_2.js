function myFuncOne() {
  return 'function one initialized';
}

function myFuncTwo(name) {
  return `Hello ${name}!`;
}

// console.log(myFuncTwo('Dzejkob'));

const assignOne = myFuncOne();
const assignTwo = myFuncTwo('Dejw');

// console.log(`assignOne: ${assignOne}`)
// console.log(`assignTwo: ${assignTwo}`)

const objTest = {
  name: 'asd',
  id: 'asdsad',
  data: {asd: 'asd'}
} 

const { data } = objTest

function myFuncThree(items) {
  function myInnerFunc(item, index) {
    return {
      id: `ID-${index + 1}`,
      item
    }
  }

  let output = []
  items.forEach((item, index) => {
    output.push(myInnerFunc(item, index))
  })

  console.log('output: ', output)
  // console.log(items.map((item, index) => myInnerFunc(item, index)))
}

const myItems = [
  'item1',
  'item2',
  'item3'
]

myFuncThree(myItems);