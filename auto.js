function auto() {
  document.querySelector("body").addEventListener("click", () => {
    document.querySelector("video").play();
  });

  document.querySelector("#text").click();
} 

auto();

