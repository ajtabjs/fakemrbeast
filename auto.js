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
            case agent.indexOf("chrome") > -1 && !!window.chrome: return vid.setAttribute("autoplay", muted);

            case agent.indexOf("firefox") > -1: return document.querySelector("video").play();
            default: return "other";
        }
    })(window.navigator.userAgent.toLowerCase());