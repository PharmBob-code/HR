/*

menuBar.forEach(menu=>{
    menu.addEventListener(`mouseenter`, function() {
            this.style.color = `#D49E72`
            this.style.transition = `color 0.3s ease`
    })
    menu.addEventListener(`mouseleave`, function() {
            this.style.color = `#0E2239`
        })

    if (menu.classList.contains(`menu-bar`)) {
        menu.addEventListener(`click`, function () {
            if (overlay.classList.contains(`overlay-hide`)) {
                overlay.classList.replace(`overlay-hide`, `overlay-container`)
                overlay.style.transition = `opacity 5s ease`
            }
        })
    }
})
//closing menu overlay
closeX.addEventListener(`click`, resetAll)
overlay.addEventListener(`click`, resetAll)
function resetAll() {
    if (overlay.classList.contains(`overlay-container`)) {
        overlay.classList.replace(`overlay-container`, `overlay-hide`)        
    }
}

//HOVER
const imageCont = [...document.querySelectorAll(`.img`)]
const rightCont = document.getElementById(`right-content`)


imageCont.forEach(image =>{
  const nextImage = image.nextElementSibling || image.previousElementSibling
  image.addEventListener(`mouseover`, () =>{
          image.style.transform = `scale(1.1)`
          nextImage.style.transform = `scale(0.9)`
    })
    

  image.addEventListener(`mouseout`, () =>{
          image.style.transform = `scale(1)`
          nextImage.style.transform = `scale(1)`
  })
})
*/ 



const header = document.getElementById(`header`)
const navLinks = [...document.querySelectorAll(`.link`)]
const contactForm = document.getElementById('contact-form')
const menuIcon = document.getElementById(`menu`)
const menuList = [...document.querySelectorAll(`.list`)]

//Hover Effect to the nav links + Menu Icon display
navLinks.forEach(link=>{
  link.addEventListener(`mouseenter`, function() {
          this.style.color = `#D49E72`
          this.style.transition = `color 0.3s ease`
  })
  link.addEventListener(`mouseleave`, function() {
          this.style.color = `#0E2239`
      })
})




//click action on menu icon
menuIcon.addEventListener(`click`, displayModal)
function displayModal() {
    const modal = document.getElementById('menuModal');
    const modalCont = document.getElementById(`modalContent`)
    let span = document.getElementsByClassName('close')[0];
    modal.style.display = 'flex';
  
    // Close the modal when the user clicks the close button
    span.onclick = function() {
        modal.style.display = 'none';
    }
  
    // Close the modal when the user clicks outside the modal content
    window.onclick = function(event) {
        if (event.target == modal || event.target == modalCont) {
            modal.style.display = 'none';
        }
    }
    
}
//click action on menu list inside menuModal 
menuList.forEach(listItem=>{
    listItem.addEventListener(`click`, (event)=>{
      let click = event.target
      let clickAction = click.dataset.action
      if (clickAction === `home`) {
        window.location.href = "index.html"
      }else if (clickAction === `blog`) {
        window.location.href = "https://hrlifestylewithdidi.blogspot.com/"
      }else if(clickAction === `about`){
        window.location.href = "about_us.html"
      }else if(clickAction ===`contact`){
        window.location.href = "contact.html"
      }else if(clickAction === `services`){
        window.location.href = "services.html"
      }
    })

    window.addEventListener("popstate", (event) => {
      // Do whatever you want when user navigates back
      window.history.back
  })
})




//contact form collection
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  emailjs.sendForm('OsteoBo', 'OsteoBob', this)
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          showModal('Message sent successfully!');
      }, function(error) {
          console.log('FAILED...', error);
          showModal('Failed to send the message. Please try again.');
      });
      contactForm.reset()
      
});

function showModal(message) {
  let modal = document.getElementById('messageModal');
  let modalMessage = document.getElementById('modal-message');
  let span = document.getElementsByClassName('close')[1];

  modalMessage.textContent = message;
  modal.style.display = 'block';

  // Close the modal when the user clicks the close button
  span.onclick = function() {
      modal.style.display = 'none';
  }

  // Close the modal when the user clicks outside the modal content
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }
}