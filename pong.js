function div() {
var div = document.createElement("div");  
div.setAttribute("id", "statusbox");
   div.style.borderRadius = "10px";
  div.style.borderColor = "black";
   document.body.appendChild(div);
}
div();


function pong(){
var text = document.createElement("p");  
text.setAttribute("contenteditable","true");  
//text.style.fontFamily("Verdana, Trebuchet MS, Arial, Helvetica, sans-serif");
  text.style.position("absolute");
  text.style.float("right");
text.setAttribute("id", "status");
$('#statusbox').append(text);
}
pong();