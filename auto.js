 function auto() {
  document.querySelector("h1").addEventListener("click", () => {
    document.querySelector("video").play();
  });

  document.querySelector("h1").click();
} 

auto();

