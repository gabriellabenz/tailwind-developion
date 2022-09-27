let nav = document.querySelector("header");
let scrol = window.scrollY;
let navHeight = nav.offsetHeight;
const addBGColor = () => {
  nav.classList.add("bg-ebony");
  nav.classList.remove("transparent");
}
const removeBGColor = () => {
  nav.classList.remove("bg-ebony");
  nav.classList.add("transparent");
}

window.addEventListener("scroll", function() {
  scrol = window.scrollY;
  if(scrol >= navHeight) {
    addBGColor()
  } else {
    removeBGColor()
  }
} )

