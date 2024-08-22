
const header = document.getElementById(`header`)
const navLinks = [...document.querySelectorAll(`.link`)]
const menuBar = [...document.querySelectorAll(`.menu-bar`)]
const overlay = document.getElementById(`overlay-container`)
const closeX = document.getElementById(`close-modal-icon`)
const menuList = [...document.querySelectorAll(`.list-container p`)]
const contactForm = document.getElementById(`contactForm`)
let storageBox = []



//Hover Effect to the header links + Menu overlay display
navLinks.forEach(link=>{
    link.addEventListener(`mouseenter`, function() {
            this.style.color = `#D49E72`
            this.style.transition = `color 0.3s ease`
    })
    link.addEventListener(`mouseleave`, function() {
            this.style.color = `#0E2239`
        })
})

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

//click action on menu list displayed on overlay 
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
        resetAll()
    })

    window.addEventListener("popstate", (event) => {
      // Do whatever you want when user navigates back
      window.history.back
  })
})

contactForm.addEventListener(`submit`, collectData)
function collectData(event) {
    event.preventDefault()

    emailjs.sendForm('OsteoBob', 'OsteoBob', this)
        .then(function(response) {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send the message. Please try again.');
        });

    /* Collect the form data
    const namE = document.getElementById("name").value
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (namE === ``|| email ===``|| phone ===`` || message===``) {
        alert `please input a text`
    }else{   
        let object = {
            clntName: namE,
            clntEmail: email,
            clntPhone: phone,
            clntMessage: message,
        }
        storageBox.push(object)
        localStorage.setItem(`data`, JSON.stringify(storageBox))
        console.log(storageBox);
        contactForm.reset()
    }*/
    
}

/*
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
  