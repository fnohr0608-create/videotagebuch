// day.js
const params = new URLSearchParams(window.location.search);
const dateStr = params.get("date");

const titleElem = document.getElementById("date");
const descElem = document.getElementById("description");
const videoElem = document.getElementById("video");

if (dateStr && days[dateStr]) {
  const entry = days[dateStr];
  
  // Datum schön formatieren
  titleElem.textContent = new Date(dateStr).toLocaleDateString("de-DE", {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  
  descElem.textContent = entry.description;
  videoElem.src = entry.video;

} else {
  titleElem.textContent = "Kein Eintrag für diesen Tag vorhanden.";
  descElem.textContent = "";
  videoElem.style.display = "none";
}
