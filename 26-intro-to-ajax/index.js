/*************************************************************************************************************************/
/* Let's make this work */
/* https://dog.ceo/api/breeds/image/random */
/*************************************************************************************************************************/
document.addEventListener('DOMContentLoaded',function(){
  // Add an Image based on button CLICK
  // Access to the api
  const API = 'https://dog.ceo/api/breeds/image/random'

  // Add an event listener to the button
  const button = document.querySelector('button')

  button.addEventListener('click',function(e){
    // fetch the url
    fetch(API)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
      // create an image element and assign the src
      const img = document.createElement('img')
      img.src = data.message

      // slap it on the dom 🤚🏻
      const div = document.querySelector('#addnewstuff')
      div.innerHTML = ''
      div.appendChild(img)
    })
    .catch(function(error){
      console.log(error)
    })

  })


})
/*************************************************************************************************************************/














/*************************************************************************************************************************/
/* DIY Sleep Function */
/*************************************************************************************************************************/
// function sleep(n) {
//   let i = 0
//   while(i < (12 ** 8) * n) {
//     i++
//   }
// }
//
// console.log('Starting the sleep function')
// sleep(10)
// console.log('Wow that sleep function took forever to run. 1 Star 🌟')

//
// function fun1(){
//   fun2()
// }
// function fun2(){
//   fun3()
// }
// function fun3(){
//   fun4()
// }
// function fun4(){
//   return "this is yeet.."
// }
//
// fun1()

/*************************************************************************************************************************/



// console.log('First Line')
// console.log('Second Line')
//
// setTimeout(()=>{
//   console.log('Third Line')
// },1000)
//
// setTimeout(()=>{
//   console.log('Fourth Line')
// },500)
//
// console.log('Fifth Line')
