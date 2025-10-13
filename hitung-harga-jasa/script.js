const btn = document.getElementById("btn");

function parse(waktu) {
  const waktuParsed = waktu.split(":").map(Number);

  if (waktuParsed.length === 1) {
    const menit = waktuParsed;
    return menit / 60;
  } else if (waktuParsed.length === 2) {
    const [jam, menit] = waktuParsed;
    return jam + menit / 60;
  }
}

function hitung(kelipatan = 500, harga = 12500) {
  const waktu = document.getElementById("durasi").value;
  const tampilHarga = document.getElementById("price-label");

  let tipeJasa = document.getElementById("tipe").value;

  if (tipeJasa === "rawat") {
    harga = 5000;
  } else if (tipeJasa === "quest") {
    harga = 10000;
  }

  const parsed = parse(waktu) * harga;
  console.log(parsed);
  const hargaTotal = Math.round(parsed / kelipatan) * 500;

  console.log(hargaTotal);

  tampilHarga.textContent = `${hargaTotal.toLocaleString("id-ID")} Rupiah`;
}

btn.addEventListener("click", () => hitung());
