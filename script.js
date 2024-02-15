'use strict'

/* Toggling Responsive Navbar on Mobile */
//selecting elements
const bar = document.getElementById('bar')
const navbar = document.getElementById('navbar')
const close = document.getElementById('close')

bar.addEventListener('click', () => {
  navbar.classList.add('activate')
})

close.addEventListener('click', () => {
  navbar.classList.remove('activate')
})

/* adding navbar hover effect and underline */

/* Mouse Hover effect on skillcards */
document.getElementById('skills').onmousemove = e => {
  for (const card of document.getElementsByClassName('skills-card')) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top

    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }
}


/* Portfolio Filtering */

//selecting elements
const gallery = document.querySelector('.gallery')
const itemboxes = document.querySelectorAll('.itembox')
const filterButtons = document.querySelectorAll('.filter')

// es6 style filtering portfolio
filterButtons.forEach(btn => {
  // add a click event
  btn.addEventListener('click', () => {
    // returns the value of the data-filter eg."newsletter, transactional etc..."
    // setting the variables
    const filter = btn.dataset.filter

    // first remove the active class on all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'))

    // then add the active class on the clicked button
    btn.classList.add('active')

    // looping through the itemboxes node list
    itemboxes.forEach(item => {
      // checking if the item is the "all" button
      if (filter === 'all') {
        item.style.display = 'block'
        item.style.opacity = '1'
        item.style.transform = 'scale(1)'
        // item.style.transition = `"${filter} 0.3s ease-in 0.1s"`

        // if the item is not "all" button
      } else {
        // if the item contains the filter
        // display block otherwise display none
        item.classList.contains(filter)
          ? ((item.style.display = 'block'),
            (item.style.transition = `"${filter} 0.3s ease-in 0.1s"`))
          : (item.style.display = 'none')

        // if the item is not "all"
        item.style.opacity = '0'
        // item.style.transform = "scale(0.5);"
      }
    })

    // delaying fade in using a setTimeout after 400ms
    setTimeout(() => {
      itemboxes.forEach(item => {
        // if items are visible
        if (item.style.display !== 'none') {
          item.style.opacity = '1'
          item.style.transform = 'scale(1)'
        }
      }, 400)
    })
  })
})

// // Filtering Portfolio v2
// gallery.addEventListener("click", (e) => {
//     if (e.target.classList.contains("filter")) {
//         //#1 removing the active class in original state
//         gallery.querySelector(".active").classList.remove("active");

//         //#2 adding the active class to its new clicked state
//         e.target.classList.add("active")

//         //#3 getting the value from data-filter attribute
//         const filterValue = e.target.getAttribute("data-filter");

//         //#4 Looping through all the itemboxes & checking if each item contains filterValue

//         //#5 Adding a show class and removing a hide class
//         itemboxes.forEach(item => {
//             if(item.classList.contains(filterValue) || filterValue === "all") {
//                 item.classList.add("show");
//                 item.classList.remove("hide")
//             } else
//             {
//                 item.classList.add("hide")
//                 item.classList.remove("show")

//             }
//         })
//     }
// });

/* Form Submission and Error Handling */
const emailInput = document.getElementById('email')
const emailError = document.getElementById('email-error')
const emailSuccess = document.getElementById('email-success')
const form = document.getElementById('form')
const submitButton = document.getElementById('submit--button')

console.log(form)

// remove error styling
function removeError () {
  emailError.innerHTML = ''
  emailInput.style.borderBottomColor = 'transparent'
}

// remove success styling
function removeSuccess () {
  emailSuccess.innerHTML = ''
  emailInput.style.borderBottomColor = 'transparent'
}

// clearing all inputs
function clearAll () {
  form.reset()
}

// validating email
function validateEmail () {
  if (
    !emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailError.innerHTML = 'Please enter a valid email.'
    emailError.style.top = '120%'
    emailInput.style.borderBottomColor = 'red'
    removeSuccess()

    if (emailInput.value == '') {
      removeError()
      return true
    }
    return false
  }
  emailSuccess.innerHTML = 'Success!'
  emailSuccess.style.top = '120%'
  emailInput.style.borderBottomColor = 'rgb(64, 179, 11)'
  removeError()
  return true
}

// changing button effect when clicked
submitButton.addEventListener('click', () => {
  // adding a button effect
  submitButton.classList.add('submit--btn')
})

// clear all form fields after submit
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName('form')) {
    form.reset()
  }
}
