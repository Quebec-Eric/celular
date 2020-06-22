
var pl1 = document.getElementById("1L")
var pl2 = document.getElementById("2L")
var pl3 = document.getElementById("3L")
var pl4 = document.getElementById("4L")
var pl5 = document.getElementById("5L")
var pl6 = document.getElementById("6L")





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
  pl1.innerHTML = "local"
  pl2.innerHTML = "local"
  pl3.innerHTML = "local"
  pl4.innerHTML = "local"
  pl5.innerHTML = "local"
  pl6.innerHTML = "local"
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



/*
  pegar a localizacao


*/

