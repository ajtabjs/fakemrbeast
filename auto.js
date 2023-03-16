console.log("MR BEAST");
console.log("To console debuggers seeing this, this webpage is a joke. Made by AJTalksAboutStuff")

function auto() {
  document.querySelector("body").addEventListener("click", () => {
    document.querySelector("video").play();
  });

  document.querySelector("#text").click();
} 

auto();

var vid = document.getElementById("beast");

var browserName = (function (agent) {
        switch (true) {
            case agent.indexOf("edge") > -1: return "MS Edge";
            case agent.indexOf("edg/") > -1: return "Edge ( chromium based)";
            case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
            case agent.indexOf("chrome") > -1 && !!window.chrome: return vid.setAttribute("muted", "true");

            case agent.indexOf("firefox") > -1: return vid.setAttribute("muted", "false") & document.querySelector("video").play();
            default: return "other";
        }
    })();