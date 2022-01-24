// https://www.canva.com/colors/color-palettes/summer-splash/
let dataColor = [
  { name: "Navy Blue", color: "#05445E" },
  { name: "Blue Grotto", color: "#189AB4" },
  { name: "Blue Green", color: "#75E6DA" },
];

const box = document.querySelectorAll("#section-2 .box");
for (let i = 0; i < box.length; i++) {
  box[i].style.backgroundColor = dataColor[i].color;
  box[i].innerHTML = `<p>${dataColor[i].name}</p>`;
}
