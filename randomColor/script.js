const btn = document.getElementById("btn");
const canvas = document.getElementById("canvas")

function gantiWarna (){
  let warna1 = Math.floor(Math.random() * 256);
  let warna2 = Math.floor(Math.random() * 256);
  let warna3 = Math.floor(Math.random() * 256);
  
  return `rgb(${warna1}, ${warna2}, ${warna3})`;
}

gantiWarna()

btn.addEventListener("click", () => {
  canvas.style.background = gantiWarna();
})