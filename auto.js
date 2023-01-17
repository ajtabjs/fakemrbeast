function auto() {
  document.querySelector("video").addEventListener("click", () => {
    document.querySelector("video").play();
  });

  document.querySelector("video").click();
}

auto();
