/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("MR BEAST");


var beast = document.createElement("video");  
beast.setAttribute("src", "https://cdn.glitch.me/788ed3c5-1869-42bb-9e05-11c8fba0acdf/MR_BEAST.mp4?v=1673926556697");  
beast.setAttribute("id", "beast"); 
beast.setAttribute("width", "650"); 
beast.setAttribute("autoplay", "true");
beast.setAttribute("autostart", "true"); 
document.body.appendChild(beast);
