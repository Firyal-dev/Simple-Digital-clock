function updateClock() {
  const now = new Date();

  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");

  document.getElementById(
    "clock"
  ).textContent = `${hours}:${minutes}:${seconds}`;

  // greeting sesuai jam
  const greeting = document.getElementById("greeting");
  if (now.getHours() >= 5 && now.getHours() < 12) {
    greeting.textContent = "Selamat pagi 🌅";
  } else if (now.getHours() >= 12 && now.getHours() < 17) {
    greeting.textContent = "Selamat siang ☀️";
  } else if (now.getHours() >= 17 && now.getHours() < 20) {
    greeting.textContent = "Selamat sore 🌇";
  } else {
    greeting.textContent = "Selamat malam 🌙";
  }
}

// Update tiap detik
setInterval(updateClock, 1000);
updateClock(); // Panggil sekali di awal
