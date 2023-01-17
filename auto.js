 function auto() {
  document.querySelector("#text").addEventListener("click", () => {
    document.querySelector("video").play();
  });

  document.querySelector("#text").click();
} 

auto();

