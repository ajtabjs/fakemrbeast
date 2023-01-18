function pong(){
var text = document.createElement("p");  
text.setAttribute("contenteditable",  "true" );  
text.setAttribute("id", "beast"); 
text.setAttribute("controls", "autoplay"); 
text.setAttribute("width", "650"); 
text.setAttribute("autoplay", "muted");
text.setAttribute("autostart", "true"); 
document.body.appendChild(text);
}
pong();