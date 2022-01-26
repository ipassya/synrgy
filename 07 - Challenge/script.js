// https://www.canva.com/colors/color-palettes/summer-splash/
let dataColor = [
  { name: "Navy Blue", color: "#05445E" },
  { name: "Blue Grotto", color: "#189AB4" },
  { name: "Blue Green", color: "#75E6DA" },
  { name: "Blue", color: "#2E8BC0" },
  { name: "Olive Green", color: "#3D550C" },
  { name: "Lime Green", color: "#81B622" },
  { name: "Kelly Green", color: "#B1D8B7" },
  { name: "Green", color: "#59981A" },
  { name: "Seafoam Green", color: "#2F5233" },
  { name: "Spearmint", color: "#94C973" },
];

const boxSection1 = document.querySelector("#section-1 .box");
const boxSection2 = document.querySelectorAll("#section-2 .box");
for (let i = 0; i < boxSection2.length; i++) {
  boxSection2[i].style.backgroundColor = dataColor[i].color;
  boxSection2[i].innerHTML = `<p>${dataColor[i].name}</p>`;
  boxSection2[i].onclick = () => {
    boxSection1.style.backgroundColor = dataColor[i].color;
    boxSection1.innerHTML = `<p>${dataColor[i].name}</p>`;
    boxSection1.style.border = "0px";
  };
}
