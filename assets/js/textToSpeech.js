
var speechTranscript = "";
var textTranscript = "";

function updateTextInput(textInput){

  if(textInput.value.includes(" ")){
    clearTextInput(textInput.value);
  }

}

function clearTextInput(text){

  textTranscript += text;
  speak(text);
  document.getElementById("textInput").value = null;

}

function enterTextInput(keyPressed){

  if(keyPressed.keyCode == 13){
    clearTextInput(document.getElementById("textInput").value + " ");
  }

}

function speak(textToSpeak){

  //ToDo

}
