const input = document.getElementById("input");
const btn = document.getElementById("check-btn");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
  const value = input.value;
  const reversed = reverseString(value);

  if (value === reversed) {
    alert("kata ini termasuk Palindrome");
  } else {
    alert("kata ini bukan Palindrome");
  }
  input.value = "";
}

btn.addEventListener("click", () => {
  check();
});
