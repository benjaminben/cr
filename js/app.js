(function() {
  var email = document.getElementById("email_entry")
  var submit = document.getElementById("email_submit")
  email.addEventListener("input", function(e) {
    if (email.value.length > 0) {
      submit.style.display = "block"
    }
    else {
      submit.style.display = "none"
    }
  })
})()
