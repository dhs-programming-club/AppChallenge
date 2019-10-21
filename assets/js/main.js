
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

function toggleTranscriptView(){

  if(textTranscript == ""){
    document.getElementById("textTranscriptOutput").innerHTML = "Nothing typed yet";
  }
  else{
    document.getElementById("textTranscriptOutput").innerHTML = textTranscript;
  }

  if(speechTranscript == ""){
    document.getElementById("speechTranscriptOutput").innerHTML = "Nothing said yet";
  }
  else{
    document.getElementById("speechTranscriptOutput").innerHTML = speechTranscript;
  }

  $(document).ready(function(){

    $("#transcriptView").slideToggle(750);

  });

}

function closeTranscriptView(){

  $(document).ready(function(){

    $("#transcriptView").slideUp(750);

  });

}
