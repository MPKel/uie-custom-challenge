let navBar = document.getElementById('logo_subtitle-container');
let navBarPosition = navBar.offsetTop;

window.onscroll = function() {
  addStick();
};


function addStick() {
  if(window.pageYOffset >= navBarPosition){
    navBar.classList.add("stickIt");
  }
  else {
    navBar.classList.remove("stickIt");
  }
}
