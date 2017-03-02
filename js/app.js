(function() {
  var imgsLoaded = 0
  var imgs = Array.from(document.getElementsByTagName("img"))
  var imgProms = imgs.map(function(p,i,a) {
    var img = document.createElement("img")
    img.addEventListener("load", function(e) {
      imgsLoaded++
      if (imgsLoaded === a.length) {
        console.log("done")
        document.body.className = ""
      }
    })
    img.src = p.src
    return img
  })

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
