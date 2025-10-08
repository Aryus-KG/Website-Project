let jam = document.getElementById("jam");
let menit = document.getElementById("menit");
let detik = document.getElementById("detik");

setInterval(() => {
  let waktu = new Date();

  jam.innerHTML = (waktu.getHours() < 10 ? "0" : "") + waktu.getHours();
  menit.innerHTML = (waktu.getMinutes() < 10 ? "0" : "") + waktu.getMinutes();
  detik.innerHTML = (waktu.getSeconds() < 10 ? "0" : "") + waktu.getSeconds();
}, 1000);
