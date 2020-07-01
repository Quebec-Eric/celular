
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

/*
 1 Barreito =ja
 2 oeste =ja
 3 nordeste =n
 4 vendaNoda=ja
 5 pampulha =ja
 6 leste =ja
 7 norte =ja
 8 noroeste=ja
 9 centro-Sul=ja
*/



var Barreiro1LA = -1958190;
var Barreiro1LO = -4400552;

var Barreiro2LA = -1958336;
var Barreiro2LO = -4401418;


var Oeste1LA = -1956153;
var Oeste1LO = -4358089;

var Oeste2LA = -19937242;
var Oeste2LO = -43968730;

var Venda1NA = -19.809925
var VEnda1NO = -43.966587;

var Venda2NA = -19.813025;
var Venda2NO = -43.958199;

var Pampulha1A = -19.859655;
var Pampulha1O = -43.935576;

var Pampulha2A = -19.858320;
var Pampulha2O = -43.949240;

var leste1A = -19.929556;
var leste1O = -43.910594;

var leste2A = -19.930446;
var leste2O = -43.910249;

var Norte1A = -19.843515;
var Norte1O = -43.938961;

var Norte2A = -19.842261;
var Norte2O = -43.937790;

var Noroeste1A = -19.895280;
var Noroeste1O = -44.011976;

var Noroeste2A = -19.902020;
var Noroeste2O = -44.019295;

var CentroSul1A = -19.938722;
var CentroSul1O = -43.944452;

var CentroSul2A = -19.938064;
var CentroSul2O = -43.947410;

var Nordeste1A = -19.885653;
var Nordeste1O = -43.946986;

var Nordeste2A = -19.882912;
var Nordeste2O = -43.937041;

















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

    pD1.innerHTML = "R.Lagoa da prata";
    pD2.innerHTML = "R.Compo formoso";
    pD3.innerHTML = "R.Lindolfo de Azevedo";
    pD4.innerHTML = "R.indiana";
    pD5.innerHTML = "R.Santos";
    pD6.innerHTML = "R.zinia";

  }
  else if (novoLA == VEnda1NA && novoLO == VEnda1NO || novoLA == Venda2NA && novoLO == Venda2NO) {

    pl1.innerHTML = "Avenida Vilarinho"
    pl2.innerHTML = "Rua camões"
    pl3.innerHTML = "Córrego Floresta"
    pl4.innerHTML = "Córrego lareira"
    pl5.innerHTML = "Córrego capão"
    pl6.innerHTML = "Córrego da lagoa do Mota"


    pD1.innerHTML = "AV.Padre Pedro Pinto";
    pD2.innerHTML = "R.Luiza vieira";
    pD3.innerHTML = "R.luiza de Carvalo";
    pD4.innerHTML = "R.viëira da cruz";
    pD5.innerHTML = "R.Santa cruz";
    pD6.innerHTML = "AV.Elias Antonio Issa";



  }
  else if (novoLA == Pampulha1A && novoLO == Pampulha1O || novoLA == Pampulha2A && novoLO == Pampulha2O) {

    pl1.innerHTML = "AV Sebastião de Brito"
    pl2.innerHTML = "Córrego Ressaca"
    pl3.innerHTML = "Córrego Olhos d'Agua"
    pl4.innerHTML = "Córrego Barúanas"
    pl5.innerHTML = ""
    pl6.innerHTML = ""

    pD1.innerHTML = "R.Leopoldina Cardoso";
    pD2.innerHTML = "R.Cyro Vaz de Melo";
    pD3.innerHTML = "R Afosnso Almeida Magalhães";
    pD4.innerHTML = "R. izabel Bueno";
    pD5.innerHTML = "R. Conselheiro Galvão";
    pD6.innerHTML = "R.Erasmo figueiro Silva";

  }

  else if (novoLA == leste1A && novoLO == leste1O || novoLA == leste2A && novoLO == leste2O) {

    pl1.innerHTML = "Rua maria carmem Valadares"
    pl2.innerHTML = "Córrego Santa ines"
    pl3.innerHTML = "Córrego da mata"
    pl4.innerHTML = "Córrego São Geraldo"
    pl5.innerHTML = ""
    pl6.innerHTML = ""

    pD1.innerHTML = "R.Rene Renault";
    pD2.innerHTML = "R.DR.Argermino Rezende";
    pD3.innerHTML = "R Georgina";
    pD4.innerHTML = "R. Nisio Batista";
    pD5.innerHTML = "R. Alberto Bressane";
    pD6.innerHTML = "R.Riveirão das Neves";


  }

  else if (novoLA == Norte1A && novoLO == Norte1O || novoLA == Norte2A && novoLO == Norte2O) {


    pl1.innerHTML = "R.Osmas Costa"
    pl2.innerHTML = "Córrego Embiras"
    pl3.innerHTML = "Fazenda velha"
    pl4.innerHTML = "Novo Aerão Reis"
    pl5.innerHTML = " Ribeirão Isidoro"
    pl6.innerHTML = ""

    pD1.innerHTML = "R.Paulo do Couto e Silva"
    pD2.innerHTML = "R.Dr.Cinyras Ladeira";
    pD3.innerHTML = "R.Raumundo Arruda ";
    pD4.innerHTML = "R Dr.Alexandre Santori";
    pD5.innerHTML = "R.Sinah Rocha Mello ";
    pD6.innerHTML = "R.José Antenor";



  }

  else if (novoLA == Noroeste1A && novoLO == Noroeste1O || novoLA == Noroeste2A && novoLO == Noroeste2O) {

    pl1.innerHTML = "AV.Amintas Jacques"
    pl2.innerHTML = "R.Tocantis"
    pl3.innerHTML = "R.Garibaldo"
    pl4.innerHTML = "R.Das violas"
    pl5.innerHTML = "R.Maria josé de jusus"
    pl6.innerHTML = ""


    pD1.innerHTML = "R.Guararapes";
    pD2.innerHTML = "R.Ninve";
    pD3.innerHTML = "R.Gaza";
    pD4.innerHTML = "R. Vila Velha";
    pD5.innerHTML = "R.Jerusalém";
    pD6.innerHTML = "R.Tigre";
  }

  else if (novoLA == CentroSul1A && novoLO == CentroSul1O || novoLA == CentroSul2A && novoLO == CentroSul2O) {

    pl1.innerHTML = "Av.Prudente de Morais"
    pl2.innerHTML = "R.Joaquim Murtilho"
    pl3.innerHTML = "Praca Marília Dirceu"
    pl4.innerHTML = "R.Bárbara Heliodoro"
    pl5.innerHTML = "R.Monte Alegre"
    pl6.innerHTML = "R.Edgar Coelho"

    pD1.innerHTML = "R.Conde de linhares";
    pD2.innerHTML = "R.Ten.renato Césas";
    pD3.innerHTML = "R.Olímpo de Assis";
    pD4.innerHTML = "R.Silva de Sá";
    pD5.innerHTML = "Av.do Contorno";
    pD6.innerHTML = "R.Barão de Macaúbas";


  }

  else if (novoLA == Nordeste1A && novoLO == Nordeste1O || novoLA == Nordeste2A && novoLO == Nordeste2O) {


    pl1.innerHTML = "AV. Bernardo de Vasconcelos"
    pl2.innerHTML = "R.Santa úrsula"
    pl3.innerHTML = "R.Ribeiro de Abreu"
    pl4.innerHTML = "R.dos Limões"
    pl5.innerHTML = "Corregó Gordura"
    pl6.innerHTML = "Corregó da avenida sanitaria"

    pD1.innerHTML = "Av.Cristiano machado"
    pD2.innerHTML = "Av.Cachoeirinha"
    pD3.innerHTML = "R.Antenor de Abreu";
    pD4.innerHTML = "R. Indianópolis"
    pD5.innerHTML = "R.Guarapá"
    pD6.innerHTML = "Regiao R.coqueiros"

  }
  else {



    pl1.innerHTML = "Está em um local seguro"
    pl2.innerHTML = "Está em um local seguro"
    pl3.innerHTML = "Está em um local seguro"
    pl4.innerHTML = "Está em um local seguro"
    pl5.innerHTML = "Está em um local seguro"
    pl6.innerHTML = "Está em um local seguro"


    pD1.innerHTML = "Está em um local seguro";
    pD2.innerHTML = "Está em um local seguro";
    pD3.innerHTML = "Está em um local seguro";
    pD4.innerHTML = "Está em um local seguro"
    pD5.innerHTML = "Está em um local seguro";
    pD6.innerHTML = "Está em um local seguro";

  }
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




