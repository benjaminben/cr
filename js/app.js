(function() {
  var email = document.getElementById("mce-EMAIL")
  var submit = document.getElementById("mc-embedded-subscribe")
  email.addEventListener("input", function(e) {
    if (email.value.length > 0) {
      submit.style.display = "block"
    }
    else {
      submit.style.display = "none"
    }
  })
})()
