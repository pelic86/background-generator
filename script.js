var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var input = document.querySelectorAll("input");
var button = document.createElement("button");
var h2 = document.querySelector("h2");
var h3 = document.querySelector("h3");

button.textContent = "Random";
button.classList.add("button-style");
body.appendChild(button);

// Initial CSS linear gradient property on page load.
// Colour inputs match the background generated on the first page load
setGradient();

function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";
}

function currentCSS() {
	h3.style.color = "white";
}

h2.addEventListener("mouseenter", currentCSS)
h2.addEventListener("mouseleave", function() {
	h3.style.color = "rgba(0,0,0,0.5)";
})



// Random - base idea
function getRandomColor(max) {
	return Math.floor(Math.random() * Math.floor(max));

}

// Referenced from Stackoverflow, Dev.to
function getRandomColor2() {
	return '#'+ Math.floor(Math.random() * 16777215).toString(16);
}

// Base idea
function randomColor() {
	body.style.background =
		"linear-gradient(to right, "
		+ "#" + getRandomColor(999999)
		+ ", "
		+ "#" + getRandomColor(999999)
		+ ")";
	css.textContent = body.style.background + ";";
	
}

function randomColor2() {
	var rdcolor1 = getRandomColor2();
	var rdcolor2 = getRandomColor2();

	input[0].value = rdcolor1;
	input[1].value = rdcolor2;

	body.style.background =
		"linear-gradient(to right, "
		+ rdcolor1
		+ ", "
		+ rdcolor2
		+ ")";

	css.textContent = body.style.background + ";";
}


button.addEventListener("click", randomColor2);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);