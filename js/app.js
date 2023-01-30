// variables
const inputs = document.querySelectorAll(".form-control")
const form = document.querySelector("#form")

// form submit event
form.addEventListener("submit", function (e) {
  e.preventDefault()
  inputs.forEach(function (input) {
    input.addEventListener("mouseleave", function (e) {
      if (e.currentTarget.value) {
        e.currentTarget.classList.remove("invalid-input")
      }
    })
    if (!input.value && input.dataset.id !== "email") {
      active(input, 1)
    } else if (input.dataset.id === "email") {
      if (validateEmail(input.value)) {
        active(input, 1)
      } else {
        active(input, 0)
      }
    } else {
      active(input, 0)
    }
  })
})
// add and remove class
function active(input, temp) {
  if (temp) {
    input.classList.add("invalid-input")
    input.nextElementSibling.classList.add("error")
  } else {
    input.classList.remove("invalid-input")
    input.nextElementSibling.classList.remove("error")
  }
}
// valid email
function validateEmail(inputText) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (inputText.match(mailformat)) {
    return false
  }
  return true
}
