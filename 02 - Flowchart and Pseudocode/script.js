// Flowchart
function openFlowchart() {
  const linkFlowchart =
    "https://whimsical.com/game-suwit-5AxCE9hDLAYpp1eLKCD8zv";
  window.open(linkFlowchart);
}

/*
Psuedocode 
Program game_suwit

Deklarasi:
  var play:boolean
  var player, comp, result: string

Deskripsi:
  play <- true
  WHILE (play)
    INPUT player
    comp <- Math.random()
    IF (comp < 0.34) THEN
      comp <- "gajah"
    ELSE IF (comp >= 0.34 AND comp < 0.67) THEN
      comp <- "semut"
    ELSE
      comp <- "orang"
    ENDIF

    result <- ""
    IF player = comp THEN
      result = "seri"
    ELSE IF
      player = "gajah" AND comp = "orang" OR
      player = "orang" AND comp = "semut" OR
      player = "semut" AND comp = "gajah" THEN
        result = "menang"
    ELSE IF
      comp = "gajah" AND player = "orang" OR
      comp = "orang" AND player = "semut" OR
      comp = "semut" AND player = "gajah" THEN
        result = "kalah"
    ELSE
        result = "memasukkan pilihan yang salah";
    ENDIF

    OUTPUT "Kamu memilih:{player} dan komputer memilih:{comp}.
            Maka hasilnya: kamu {result}."
    INPUT play <- boolean
  
  OUTPUT "Terimakasih sudah bermain :D"
*/

var play = true;
while (play) {
  // Input player
  var player = prompt("pilih : gajah, semut, orang");

  // Input Comp
  var comp = Math.random();
  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "semut";
  } else {
    comp = "orang";
  }

  // Rules
  var result = "";
  if (player == comp) {
    result = "SERI!";
  } else if (
    (player == "gajah" && comp == "orang") ||
    (player == "orang" && comp == "semut") ||
    (player == "semut" && comp == "gajah")
  ) {
    result = "menang";
  } else if (
    (comp == "gajah" && player == "orang") ||
    (comp == "orang" && player == "semut") ||
    (comp == "semut" && player == "gajah")
  ) {
    result = "kalah";
  } else {
    result = "Memasukkan pilihan yang salah!";
  }

  // Result
  alert(
    "Kamu memilih : " +
      player +
      " dan Komputer memilih : " +
      comp +
      "\nMaka hasilnya : Kamu " +
      result
  );

  play = confirm("Bermain lagi?");
}

alert("Terimakasih sudah bermain :D");
