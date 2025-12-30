const params = new URLSearchParams(window.location.search);
const date = params.get("date");

const entry = days[date];

if (!entry) {
  document.getElementById("description").textContent =
    "Kein Eintrag für diesen Tag.";
} else {
  document.getElementById("date").textContent = date;
  document.getElementById("description").textContent = entry.text;

  document.getElementById("video").src =
    `https://www.youtube-nocookie.com/embed/${entry.video}`;
}
