const inputs = document.querySelectorAll(".form-control")
const form = document.querySelector("#form")
// document.body.style.outlineColor

form.addEventListener("submit", function (e) {
  e.preventDefault()
  inputs.forEach(function (input) {
    input.addEventListener("mouseleave", function (e) {
      if (e.currentTarget.value) {
        e.currentTarget.classList.remove("active-input")
      }
    })
    if (!input.value) {
      input.classList.add("active-input")
    } else {
      input.classList.remove("active-input")
    }
  })
})
