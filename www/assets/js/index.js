

window.addEventListener("load", function(){
	
	document.getElementById("delayPreview").innerHTML = localStorage.getItem("wordDelay");
	
	document.getElementById("delayInput").value = localStorage.getItem("wordDelay");
	
});

function refreshDelay(){
	
	localStorage.setItem("wordDelay", document.getElementById("delayInput").value);
	
	wordDelay = parseInt(localStorage.getItem("wordDelay"));
	
	document.getElementById("delayPreview").innerHTML = parseInt(localStorage.getItem("wordDelay"));
	
}