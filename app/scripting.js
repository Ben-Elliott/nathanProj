function runScript(e) {
	if (e.keyCode == 13) {
		document.getElementById("inputbox").form.submit();
		//document.getElementById("inputbox").nodeValue = "";
	}
}
function page() {
	phpLoad();
}
function phpLoad() {
	var xmlhttp = getXMLHttpRequestObject();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			//document.getElementById('emptyDiv').innerHTML = xmlhttp.responseText;
			//working on instead of filling defined div, looping over array data to create posts
			parsingTxtFile(xmlhttp.responseText); 
		}
	}
	
		xmlhttp.open('GET', 'quotes.txt', true);
		xmlhttp.send(null);
	}
function getXMLHttpRequestObject() {
	var xmlhttp = null;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
	}
	return xmlhttp;
}
function parsingTxtFile(str) {
	var posts = str.split("newline");
	for (i=1; i < posts.length; i++) {
		//create a new post for each array slot
		var elementName = "quote" + i;
		var newPost = document.createElement("div");
		var textNode = document.createTextNode('"' + posts[i] + '"');
		newPost.appendChild(textNode);
		
		var wrapper = document.getElementById("quoteWrapper");
		wrapper.insertBefore(newPost, wrapper.childNodes[0]);
		
		newPost.className = "quote";
		newPost.id = elementName;
	}
}