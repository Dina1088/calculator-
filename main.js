let span = document.querySelector("span");
let nav = document.querySelector("nav");
if (
  span.addEventListener("click", function () {
    nav.style.display = "block";
  })
) {
} else {
  span.addEventListener("dblclick", function () {
    nav.style.display = "none";
  });
}
let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.id === "=") {
      display.value = eval(display.value);
    } else if (btn.id === "ac") {
      display.value = "";
    } else if (btn.id === "de") {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += btn.id;
    }
  });
});
