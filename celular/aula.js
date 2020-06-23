
var pl1 = document.getElementById("1L")
var pl2 = document.getElementById("2L")
var pl3 = document.getElementById("3L")
var pl4 = document.getElementById("4L")
var pl5 = document.getElementById("5L")
var pl6 = document.getElementById("6L")


var pD1 = document.getElementById("1D")
var pD2 = document.getElementById("2D")
var pD3 = document.getElementById("3D")
var pD4 = document.getElementById("4D")
var pD5 = document.getElementById("5D")
var pD6 = document.getElementById("6D")


var Barreiro1LA = 1958190;
var Barreiro1LO = 4400552;

var Barreiro2LA = 1958336;
var Barreiro2LO = 4401418;


var Oeste1LA = -1956153;
var Oeste1LO = -4358089;

var Oeste2LA = -19937242;
var Oeste2LO = -43968730;
var novoLA;
var novoLO;


var butL = document.getElementById("opa1")


var pegar = document.getElementById("demo");
function Loc() {


  butL.style.background = "green"
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  }
  else { pegar.innerHTML = "Seu browser não suporta Geolocalização."; }
}
function showPosition(position) {
  pegar.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;

  novoLO = position.coords.longitude;
  novoLA = position.coords.latitude;

  if (novoLA == Barreiro1LA && novoLO == Barreiro1LO || novoLA == Barreiro2LA && novoLO == Barreiro2LO) {
    pl1.innerHTML = "Tereza Cristina";
    pl2.innerHTML = "Córrego Olaria";
    pl3.innerHTML = "Córrego do Túnel";
    pl4.innerHTML = "Córrego Jatobá";
    pl5.innerHTML = "Córrego do Barreiro";
    pl6.innerHTML = "Córrego Bonsucesso";


    pD1.innerHTML = "Afonso Vaz de Melo";
    pD2.innerHTML = "Sinfronio Brochado";
    pD3.innerHTML = "Barrao de Coromandel";
    pD4.innerHTML = "Jose Goncalves";
    pD5.innerHTML = "Souza magalhãoes";
    pD6.innerHTML = "Álvaro de silveira";

  }
  else if (novoLA == Oeste1LA && novoLO == Oeste1LO || novoLA == Oeste2LA && novoLO == Oeste2LA) {
    pl1.innerHTML = "Tereza Cristina"
    pl2.innerHTML = "Cercadinho"
    pl3.innerHTML = "Governador Benedito"
    pl4.innerHTML = "Córrego dos Pintos "
    pl5.innerHTML = "Rua Coruripe"
    pl6.innerHTML = "Rua Coruripe"
  }

  pl1.innerHTML = "Regiao nao mapeada"
  pl2.innerHTML = "Regiao nao mapeada"
  pl3.innerHTML = "Regiao nao mapeada"
  pl4.innerHTML = "Regiao nao mapeada"
  pl5.innerHTML = "Regiao nao mapeada"
  pl6.innerHTML = "Regiao nao mapeada"


  pD1.innerHTML = "Regiao nao mapeada";
    pD2.innerHTML = "Regiao nao mapeada";
    pD3.innerHTML = "Regiao nao mapeada";
    pD4.innerHTML = "Regiao nao mapeada";
    pD5.innerHTML = "Regiao nao mapeada";
    pD6.innerHTML = "Regiao nao mapeada";
}
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      pegar.innerHTML = "Usuário rejeitou a solicitação de Geolocalização."

      break;
    case error.POSITION_UNAVAILABLE:
      pegar.innerHTML = "Localização indisponível."
      break;
    case error.TIMEOUT:
      pegar.innerHTML = "A requisição expirou."
      break;
    case error.UNKNOWN_ERROR:
      pegar.innerHTML = "Algum erro desconhecido aconteceu."
      break;
  }



}




