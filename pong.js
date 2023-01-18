function div() {
var text = document.createElement("div");  
text.setAttribute("id", "statusbox");
   text.style.borderColor = "black";
  text.style.borderColor = "black";
}


function pong(){
var text = document.createElement("p");  
text.setAttribute("contenteditable","true");  
text.style.fontFamily("Verdana, Trebuchet MS, Arial, Helvetica, sans-serif");
  text.style.postition("absolute");
  text.style.float("right");
text.setAttribute("id", "status");
$('#iframecontainer').append(text);
}