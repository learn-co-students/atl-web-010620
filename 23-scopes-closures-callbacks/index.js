
function multiplyByN(outerNum) {
  debugger;
  return function(n) {
    return outerNum * n
  }
}

const multiplyByTen = multiplyByN(10)



// console.log(dinoName)
// console.log(lastname)
//
// let someFunc = function (){
//   let dinoName = 'Dino'
//   console.log('Hello There Fellas!!')
// }
//
// someFunc()
//










// let pizza = 'outer pizza is global pizza'
//
// function eatPizza() {
//   let place = 'dominos'
//   let pizza = 'inner pizza is pizza hut stuffed crust™️'
//
// }
// console.log(pizza)
// console.log(place)
//
// eatPizza()
