
let moon = document.getElementById('moon');
let stars = document.getElementById('stars');
let mage = document.getElementById('mage');

window.addEventListener('scroll', function() 
{
  let value = window.scrollY;
  stars.style.left = value * 0.2 + 'px';
  if (value <= 500) {
  moon.style.top = value * 1 + 'px';
}
  
})

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){

  dropDownMenu.classList.toggle('open')
 
}

function handleChange() {
  var x = document.getElementById("pwd");
  var y = document.getElementById("pwd-repeat");

  if (x.value == y.value)
  {
  
  }

  else{
  alert("Passwords do not match!");
      event.preventDefault();
}

}
