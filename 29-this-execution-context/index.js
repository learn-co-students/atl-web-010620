// const dog = {
//   name: 'winfield',
//   favSnacks: [
//     'cabbage', 'carrots', 'bones'
//   ],
//   eatSnacks: function() {
//     // this => dog
//     this.favSnacks.forEach(snack => {
//       console.log(`${this.name} is eating ${snack}`)
//     })
//   },
//   eatSnacksAllFunction: function() {
//     // this => dog
//     this.favSnacks.forEach(someCallBackWhatever.bind(this))
//   }
// }
//
// function someCallBackWhatever(snack) {
//   console.log(`${this.name} is eating ${snack}`)
// }
//
//



const seal = {
  name: 'sealy',
  kiss: function() {
    debugger;
    console.log(`${this.name} from a rose`)
  }
}

seal.kiss()

var someMethod = seal.kiss
