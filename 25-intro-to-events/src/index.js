document.addEventListener('DOMContentLoaded',function (){

// Handle form submission
// Add it to the page


// Get the form
const commentForm = document.querySelector('#comment-form')

// Add the event listener
commentForm.addEventListener('submit',function(event){
  // Handle the event
  event.preventDefault()
  const form = event.target
  const comment = form.querySelector('#new-comment').value

  // Slap something on the dom 🤚🏻
  const commentList = document.querySelector('#comments-container')
  const ul = document.createElement('ul')
  const li = document.createElement('li')

  li.textContent = comment
  ul.appendChild(li)
  commentList.appendChild(ul)

  form.reset()
})






  const buttonParent = document.querySelector('#button-parent')
  // Listen for an event => 'click'
  buttonParent.addEventListener('click',function(event){

    if(event.target.id === 'alert'){
      alert('You clicked alert button.')
    }else if(event.target.id === 'log'){
      console.log('Something...')
    }else if(event.target.id === 'errr'){
      console.error('There was an error somewhere, go fix it..')
    }
  })



  // Show an alert on button click

  // Need button
  // const alertButton = document.querySelector('#alert')
  // // Listen for an event => 'click'
  // alertButton.addEventListener('click',function(){
  //   // pop up an alert
  //   alert('You clicked alert button.')
  // })
  //
  // const consoleSomething = document.querySelector('#log')
  // consoleSomething.addEventListener('click',function(){
  //   console.log('Something...')
  // })
  //
  // const consoleErr = document.querySelector('#errr')
  // consoleErr.addEventListener('click',function(){
  //   console.error('There was an error somewhere, go fix it..')
  // })



})
