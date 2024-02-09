var reinasPorColocar = 8;

function colocarReina(celda) {

  if (reinasPorColocar > 0) {
    if (window.getComputedStyle(celda).backgroundImage == "none") {
      var comboBox = document.getElementById("Combo");
      celda.style = "background-image: url(./img/reina"+comboBox.value+".png); background-size:cover;";
      var renglon = celda.parentElement.rowIndex;
      var columna = celda.cellIndex;
      /*Bloqueamos renglon y columnas*/
      var tablero = document.getElementById("Tablero");
      for (let i = 0; i < 8; i++) {

        if (columna != i) {
          tablero.rows[renglon].cells[i].removeAttribute("onclick");
          tablero.rows[renglon].cells[i].style.backgroundColor="#ff0000";
        }

        if (renglon != i) {
          tablero.rows[i].cells[columna].removeAttribute("onclick");
          tablero.rows[i].cells[columna].style.backgroundColor="#ff0000";
        }

      }

      /*Recorremos diagonales*/
      var r = renglon;
      var c = columna;


      /*superior izquierda*/
      while(r >= 0 && c >= 0){
        tablero.rows[r].cells[c].style.backgroundColor="#ff0000";
        tablero.rows[r].cells[c].removeAttribute("onclick");
        r--;
        c--;
      }

      r = renglon;
      c = columna;
      /*Diagonal superior derecha*/
      while((r < 8 && c < 8)){
        tablero.rows[r].cells[c].style.backgroundColor="#ff0000";
        tablero.rows[r].cells[c].removeAttribute("onclick");
        r++;
        c++;
      }

      r = renglon;
      c = columna;

      /*inferior derecha*/
      while(c >= 0 && r < 8){
        tablero.rows[r].cells[c].style.backgroundColor="#ff0000";
        tablero.rows[r].cells[c].removeAttribute("onclick");
        r++;
        c--;
      }

      r = renglon;
      c = columna;

      /*superior izquierda */
      while(r >= 0 && c < 8){
        tablero.rows[r].cells[c].style.backgroundColor="#ff0000";
        tablero.rows[r].cells[c].removeAttribute("onclick");
        r--;
        c++;
      }

      reinasPorColocar--;
    }else {
      alert(renglon + "," + columna);
      celda.style = "background-image: none;";

      var renglon = celda.parentElement.rowIndex;
      var columna = celda.cellIndex
      /*Bloqueamos renglon*/
      var tablero = document.getElementById("Tablero");
      
      for (let i = 0; i < 8; i++) {
        tablero.rows[renglon].cells[i].setAttribute("onclick", "colocarReina(this)");
        tablero.rows[renglon].cells[i].style.backgroundColor="";
        tablero.rows[i].cells[columna].setAttribute("onclick", "colocarReina(this)");
        tablero.rows[i].cells[columna].style.backgroundColor="";
      }

      reinasPorColocar++;
    }
  }
  document.getElementById("reinasPorColo").innerHTML = "Reinas por colocar:" + reinasPorColocar;
  document.getElementById("reinasColocadas").innerHTML = "Reinas colocadas:" + (8 - reinasPorColocar);
}

function cambiarContenidoConImagenes() {
  var selector = document.getElementById("Combo");
  var opcionSeleccionada = selector.value;
  var tabla = document.getElementById("Tablero");
  var filas = tabla.rows;

  for (var i = 0; i < filas.length; i++) {
      var celdas = filas[i].cells;

      for (var j = 0; j < celdas.length; j++) {
          var celda = celdas[j];
          if (tieneImagen(celda)) {
              if (opcionSeleccionada === "1") {
                celda.style = "background-image: url(./img/reina1.png); background-size:cover;";
                tabla.rows[celda.parentElement.rowIndex].cells[celda.cellIndex].style.backgroundColor="#ff0000";
              } else if (opcionSeleccionada === "2") {
                celda.style = "background-image: url(./img/reina2.png); background-size:cover;";
                tabla.rows[celda.parentElement.rowIndex].cells[celda.cellIndex].style.backgroundColor="#ff0000";
              } else if(opcionSeleccionada == "3"){
                celda.style = "background-image: url(./img/reina3.png); background-size:cover;"
                tabla.rows[celda.parentElement.rowIndex].cells[celda.cellIndex].style.backgroundColor="#ff0000";
              }
          }
      }
  }
}

function tieneImagen(celda) {
  if(window.getComputedStyle(celda).backgroundImage != "none") return true;
  return false;
}


function refreshPage() {
  location.reload();
}