document.addEventListener('DOMContentLoaded',function(e){
  // Objective - Show a comment

  // Get access to the FORM
    const commentForm = document.getElementById('comment-form')

  // Listen for submit
  commentForm.addEventListener('submit',function(e){
    // Block the refresh or redirect
    e.preventDefault()
    // Make items render
      // Get the parent
      const commentParent = document.getElementById('comments-container')

      // Create a list item
      const comment = document.createElement('li')
      // Change the content in li with form data
      comment.innerText = e.target.querySelector('#new-comment').value

      // 🤚🏻
      commentParent.appendChild(comment)

      e.target.reset()
  })










  // Process

  const buttonParent = document.querySelector('#button-parent')

  buttonParent.addEventListener('click',function(e){
    if(e.target.id === 'alert'){
      alert('ThIs Is An AlErT 🤔')
    }else if(e.target.id === 'log'){
      console.log('ThIs Is A lOg 👁')
    }else if(e.target.id === 'errr'){
      console.error('ThIs Is An ErRoR ❓')
    }
  })













   // // Get the button
   //  const alertButton = document.querySelector('#alert')
   // // Add event listener
   //  alertButton.addEventListener('click',function(e){
   //    // show a pop up
   //    alert('ThIs Is An AlErT 🤔')
   //  })
   //
   //
   //  const logButton = document.querySelector('#log')
   //  logButton.addEventListener('click',function(e){
   //    console.log('ThIs Is A lOg 👁')
   //  })
   //
   //  const errButton = document.querySelector('#errr')
   //  errButton.addEventListener('click',function(e){
   //    console.error('ThIs Is An ErRoR ❓')
   //  })
})
