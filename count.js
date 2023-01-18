const currentColor = localStorage.getItem('beasted');
var counterContainer = document.querySelector("#count");
var count = localStorage.getItem("beasted");

// Check if page_view entry is present
if (count) {
  count = Number(count) + 1;
  localStorage.setItem("beasted", count);
} else {
  count = 1;
  localStorage.setItem("beasted", 1);
}
counterContainer.innerHTML = count;



if 
// Adding onClick event listener