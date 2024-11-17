function div() {
var div = document.createElement("div");  
div.setAttribute("id", "statusbox");
   document.body.appendChild(div);
   div.style.borderRadius = "10px";
  div.style.borderColor = "black";
  console.log("div created")
}
div();


function pong(){
var text = document.createElement("p");  
text.setAttribute("contenteditable","true");  
text.style.fontFamily = "Verdana, Trebuchet MS, Arial, Helvetica, sans-serif";
  text.innerHTML = "edit status here!";
text.setAttribute("id", "status");
  text.style.position = "absolute";
  text.style.float = "right";
  $('#statusbox').append(text);
  console.log("text created!")
}
pong();