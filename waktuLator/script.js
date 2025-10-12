const btn = document.getElementById("btn");
const text = document.getElementById("total-waktu");

function parseWaktu(input) {
  const waktuParsed = input.split(":").map(Number);

  if (waktuParsed.length === 2) {
    const [menit, detik] = waktuParsed;
    return menit * 60 + detik;
  } else if (waktuParsed.length === 3) {
    const [jam, menit, detik] = waktuParsed;
    return jam * 3600 + menit * 60 + detik;
  } else {
    return NaN;
  }
}

function formatWaktu(totalWaktu) {
  const jam = Math.floor(totalWaktu / 3600);
  const menit = Math.floor((totalWaktu % 3600) / 60);
  const detik = Math.floor(totalWaktu % 60);

  return `${String(jam).padStart(2, 0)}:${String(menit).padStart(
    2,
    0
  )}:${String(detik).padStart(2, 0)}`;
}

function hitung() {
  const awal = document.getElementById("waktu-awal").value;
  const akhir = document.getElementById("waktu-akhir").value;

  const totalWaktuKurang = parseWaktu(akhir) - parseWaktu(awal);

  text.textContent = formatWaktu(totalWaktuKurang);
}

btn.addEventListener("click", hitung);
