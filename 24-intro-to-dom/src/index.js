console.log('%c Hello, World!', 'color: red')
// Objective / Feature ???
  // Render memes on the page

// PROCESS

dankMemes.forEach(function(image_url){
  // console.log(image_url)

  // Create img tag
  var someImage = document.createElement('img')

  // Change the src
  someImage.src = image_url
  // someImage.className += " first second third"

  // Find the location
  var container = document.querySelector('#container')

  // 🤚🏻 to the DOM
  container.appendChild(someImage)
})



















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
