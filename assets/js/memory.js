
window.addEventListener("load", function(){
	
	initateMemory();
	
});

function initateMemory(){
	
	if(localStorage.getItem("wordDelay") == null){
		
		localStorage.setItem("wordDelay", 200);
		
	}
	
}


