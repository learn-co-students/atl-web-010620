
const dog = {
  name: 'winfield',
  favSnacks: [
    'cabbage', 'carrots', 'bones'
  ],
  eatSnacks: function() {
    this.favSnacks.forEach(snack => {
      console.log(`${this.name} is eating ${snack}`)
    })
  },
  eatSnacksAllFunction: function() {
    this.favSnacks.forEach(function(snack) {
      console.log(`${this.name} is eating ${snack}`)
    })
  }
}

function someCallBackWhatever(snack) {
  console.log(`${this.name} is eating ${snack}`)
}

const seal = {
  name: 'sealy',
  kiss: function() {
    console.log(`${this.name} from a rose`)
  }
}

seal.kiss()

var someMethod = seal.kiss


// const dog = {
//   name: 'winfield',
//   favSnacks: ['cabbage', 'carrots', 'bones'],
//   arrowEatSnacks: function() {
//     this.favSnacks.forEach( snack => {
//       console.log(`${this.name} is eating ${snack}`)
//     })
//   },
//   regEatSnacks: function() {
//     this.favSnacks.forEach(function(snack) {
//       console.log(`${this.name} is eating ${snack}`)
//     }.bind(person))
//   }
// }

// console.log('this is the function keyword', dog.regEatSnacks())
// console.log('this is the arrow', dog.arrowEatSnacks())
//
// console.log(filtered)
// this.name = 'window object'


//
// // /************ Function Called with New Keyword ***********/
// // //inside a constructor fn, this will be the newly created object
// //

// const personConstructor = function(name) {
//   // `this` within a constructor will be the newly created object
//   // { name: name }
//   this.name = name
// }
//

// const evans = new personConstructor('evans')
//
// function onTheGlobal() {
//   console.log(this)
// }
//
// const instructor = {
//   name: "POWERFUL MC",
//   lecture: function(){
//     return `${this.name} gives POWERFUL lectures ;)`
//   }
// }
//


/*************************************************************************************************************************/
  /* Custom forEach */
/*************************************************************************************************************************/

    function myForEach(coolArray, callback){
      for (var i = 0; i < coolArray.length; i++) {
        callback(coolArray[i])
      }
    }

    function myCoolSuperAwesomeMegaCB(name) {
      console.log(name + "!")
    }

    const instructors = ['Maddie', 'Hannah', 'Princeton', 'Kaeland']

    myForEach(instructors, myCoolSuperAwesomeMegaCB)
/*************************************************************************************************************************/
