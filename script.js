var hmButton = document.querySelector('.hamburgerButton');
var navBar = document.querySelector('nav');
var navUl = navBar.querySelector('ul');
var pseudoNav = document.querySelector('.pseudoNav');


hmButton.addEventListener("click", function(){
	pseudoNav.style.display = "none";
	navBar.style.display = "block";
	navUl.style.display = "block";
})