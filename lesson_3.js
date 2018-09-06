const myObj = {
  name: 'Dzejkob',
  active: true
}

function changeActive(obj) {
  obj.active = !obj.active
}

console.log(myObj)
changeActive(myObj)
console.log(myObj)
// ************

changeActive(myObj)
function getNameIfActive(obj) {
  if(obj.active) {
    return obj.name
  } else {
    return 'no active user defined'
  }
}

console.log(getNameIfActive(myObj))