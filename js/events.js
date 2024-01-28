const btn1 = document.querySelector(".btn1");
const input = document.querySelector(".input");
const txt = document.querySelector(".showText");

btn1.addEventListener("dblclick", (evt) => {
  input.style.display = "block";
});

input.addEventListener("input", (event) => {
  txt.innerText = input.value;
  let count = input.value.length;
  if (count >= 18) {
    alert("Max 18 characters allowed");
    input.disabled = true;
    txt.style.color = "red";
    input.style.cursor = "not-allowed";
  } else {
    txt.style.color = "green";

    input.disabled = false;
  }
});

let originalColor;
txt.addEventListener("mouseenter", () => {
  originalColor = txt.style.color;
  txt.style.color = "Blue";
});

txt.addEventListener("mouseleave", () => {
  txt.style.color = originalColor;
});

