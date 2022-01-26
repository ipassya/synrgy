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

$("#section-2 .box").each(function (i) {
  $(this).css("background-color", dataColor[i].color);
  $(this).html(`<p>${dataColor[i].name}</p>`);
  $(this).on("click", function () {
    $("#section-1 .box").css("background-color", dataColor[i].color);
    $("#section-1 .box").html(`<p>${dataColor[i].name}</p>`);
    $("#section-1 .box").css("border", "0px");
  });
});
