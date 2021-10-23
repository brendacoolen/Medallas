let posiciondellegada: number = document.getElementById("posiciondellegada");
if (posiciondellegada === 1) {
  console.log("Medalla de oro");
} else {
  if (posiciondellegada === 2) {
    console.log("Medalla de plata");
  } else if (posiciondellegada === 3) {
    console.log("Medalla de bronce");
  } else console.log("Entregar medalla de participacion");
}
