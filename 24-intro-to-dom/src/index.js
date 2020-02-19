

// Adding images to the page

// Get the parent => div => '#container'
const parent = document.querySelector('#container')

// Create IMG tags for each item in the array
dankMemes.forEach(function(item){
  // console.log(item)
  const img = document.createElement('img')
  img.src = item

  // Slap it on the DOM 🤚🏻
  parent.appendChild(img)
})

















// console.log('%c Hello, World!', 'color: goldenrod')
//
// // Adding an li on the page
//
// // Access the parent => span
// const outerDiv = document.querySelector('.outer-container')
// const innerDiv = outerDiv.querySelector('.inner-container')
// const span = innerDiv.querySelector('span')
//
// // Brand new li
// const newLi = document.createElement('li')
// newLi.textContent = 'Three'
//
// // Slap it on the DOM 🤚🏻
// span.appendChild(newLi)
