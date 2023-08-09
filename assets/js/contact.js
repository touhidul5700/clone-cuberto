//selector js
function changeColor(element) {
  if (element.classList.contains("clicked")) {
    element.classList.remove("clicked");
  } else {
    element.classList.add("clicked");
  }
}

/* wave js */
document.getElementById("wave-triger-1").addEventListener("click", function () {
  document.getElementById("wave-item-1").classList.add("wave");
});

document.getElementById("wave-triger-2").addEventListener("click", function () {
  document.getElementById("wave-item-2").classList.add("wave");
});
document.getElementById("wave-triger-3").addEventListener("click", function () {
  document.getElementById("wave-item-3").classList.add("wave");
});

/* file */
$('.multifile').multifile();