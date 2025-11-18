const favouriteThings = ["games", "API wrappers", "libraries", "websites"];
let currentIndex = favouriteThings.length - 1;

function cycle() {
  const element = favouriteThings[currentIndex];
  currentIndex = (currentIndex + 1) % favouriteThings.length;

  document.getElementById("myThing").innerText = element;
}
