var i = 2;

function newPost() {
	i++;
	var stringI = toString(i)
	var newDiv = document.createElement(stringI);
	var newContent = document.createTextNode("form data");
	newDiv.appendChild(newContent);
	
	var currentDiv = document.getElementById(stringI);
	document.body.insertBefore(newDiv, currentDiv);
}
function runScript(e) {
}