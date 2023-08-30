
const checkbox = document.getElementById("checkbox");

const lblCheckbox = document.querySelector(".lblCheckbox");

const astro = document.querySelector(".astro");

function changeState() {

  if( checkbox.checked ) {
    if( lblCheckbox.classList.contains("setDay") ){
      lblCheckbox.classList.replace("setDay", "setNight");
      astro.classList.replace("astroSun", "astroMoon");
    } else {
      astro.classList.add("astroMoon");
      lblCheckbox.classList.add("setNight");
    }
  } else {
    lblCheckbox.classList.replace("setNight", "setDay");
    astro.classList.replace("astroMoon", "astroSun");
  }

}

lblCheckbox.addEventListener("click", changeState);
window.addEventListener("load", function() {
  checkbox.checked = false;
})
