const display = document.getElementById("display");
const btn = document.querySelectorAll("button");
btn.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;

    if (button.classList.contains("number")) {
      tambahKeDisplay(buttonValue);
    } else if (button.classList.contains("operator")) {
      tambahKeDisplay(buttonValue);
    } else if (button.classList.contains("clear-all")) {
      clearAll();
    } else if (button.classList.contains("delete")) {
      hapus();
    } else {
      hitung();
    }
  });
});

function hapus() {
  display.value = display.value.toString().slice(0, -1);
}

function tambahKeDisplay(input) {
  display.value += input;
}

function clearAll() {
  display.value = "";
}

function hitung() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "ERRor";
  }
}
