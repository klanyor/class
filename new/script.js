const cekUrl = "https://mymockapi.com/products";
const gonderUrl = "https://mymockapi.com/products";

// GET request
async function cek() {
  try {
    const cavab = await fetch(urlCek);
    const data = await cavab.json();
    document.getElementById("goster").textContent = JSON.stringify(data, null, 2);
  } catch(hata) {
    document.getElementById("goster").textContent = "Xəta oldu: " + hata;
  }
}

// POST request
async function gonder(e) {
  e.preventDefault();
  const ad = document.getElementById("ad").value;
  const mail = document.getElementById("mail").value;

  try {
    const cavab = await fetch(urlGonder, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ad, mail })
    });
    const data = await cavab.json();
    document.getElementById("goster2").textContent = JSON.stringify(data, null, 2);
  } catch(hata) {
    document.getElementById("goster2").textContent = "Xəta: " + hata;
  }
}
