

window.addEventListener("load", function(){
	
	initateMemory();
	
	document.getElementById("delayPreview").innerHTML = localStorage.getItem("wordDelay");
	
	document.getElementById("delayInput").value = localStorage.getItem("wordDelay");
	
});

function refreshDelay(){
	
	localStorage.setItem("wordDelay", document.getElementById("delayInput").value);
	
	wordDelay = parseInt(localStorage.getItem("wordDelay"));
	
	document.getElementById("delayPreview").innerHTML = parseInt(localStorage.getItem("wordDelay"));
	
}

function delayUp(){
	
	console.log(1);
	
	localStorage.setItem("wordDelay", parseInt(localStorage.getItem("wordDelay")) + 1);
	
	document.getElementById("delayPreview").innerHTML = parseInt(localStorage.getItem("wordDelay"));
	
	document.getElementById("delayInput").value = localStorage.getItem("wordDelay");
	
}

function delayDown(){
	
	console.log(2);
	
	localStorage.setItem("wordDelay", parseInt(localStorage.getItem("wordDelay")) - 1);
	
	document.getElementById("delayPreview").innerHTML = parseInt(localStorage.getItem("wordDelay"));
	
	document.getElementById("delayInput").value = localStorage.getItem("wordDelay");
	
}


