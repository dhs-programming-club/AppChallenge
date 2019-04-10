
function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, ms);
  });
}

function convertToArray(str){
	
	var spaces = 1;
	
	for(var i = 0; i < str.length; i++){
		
		if(str.substring(i, i + 1) == " "){
			
			spaces++;
			
		}
		
	}
	
	var endpoint = new Array(spaces);
	
	for(var i = 0; i < spaces; i++){
		
		endpoint[i] = str.substring(0, str.indexOf(" "));
		
		str = str.substring(str.indexOf(" ") + 1);
		
		if(i == spaces - 1){
			
			endpoint[i] = str;
			
		}
		
	}
	
	return endpoint;
	
}


