if ('geolocation' in navigator) {

  const watcher = navigator.geolocation.watchPosition(function (Position) {

    console.log(Position)
  }, function (error) {

    console.log(error)
  }, { enableHighAccuracy: true, maximumAge: 30000, timeout: 3000 })

} else {
  alert('ops,não foi possivel pegar  sua localização')

}
var local ;

local = Position;

if ( local  ){


 




}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
  
//  19.8527° S, 43.9560° W  pampulha
//  atitude: 19° 48' 57'' Sul, Longitude: 43° 57' 15'' Oeste. centro sul
//19.8172° S, 43.9519° venda nova 

 
 

var butao = window.document.getElementsByClassName('button')




       
  
