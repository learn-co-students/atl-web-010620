/*************************************************************************************************************************/
/* Let's make this work */
/* https://dog.ceo/api/breeds/image/random */
/*************************************************************************************************************************/
  document.addEventListener('DOMContentLoaded',function(e){

    // 1. Click on the Button
     // Access to the parent
     const buttonParent = document.querySelector('.container.btnclass')
     // Get the right button
     const buttonItSelf = buttonParent.querySelector('button')
     // Add an addEventListener and pass a callback
     buttonItSelf.addEventListener('click',function(e){
       // 2. Show an Image
        // Get the image

        const data = fetch('https://dog.ceo/api/breeds/image/random')
        .then(function(response){
          return response.json()
        })
        .then(function(jsonResponse){
          // create an image element
            const doggieImg = document.createElement('img')
            doggieImg.src = jsonResponse.message

          // 🤚🏻
            const imgParent = document.querySelector('#addnewstuff')
            debugger;
            imgParent.innerHTML = ''
            imgParent.appendChild(doggieImg)
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










//
// function fun1(){
//   fun2()
//   console.log('fun1 ended')
// }
// function fun2(){
//   fun3()
//   console.log('fun2 ended')
// }
// function fun3(){
//   fun4()
//   console.log('fun3 ended')
// }
// function fun4(){
//   console.log('fun4 ended')
//   return "this is yeet.."
// }
//
// fun1()
