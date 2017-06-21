function initMap() {
	var map= new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
		center: {lat: -9.11911427, lng: -77.0349046},
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl:false
	});
	function buscar(){
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(functionExito, functionError);
		}
	}

	document.getElementById("encuentrame").addEventListener("click", buscar);
    var latitud, longitud;

    var functionExito = function(posicion) {
    	latitud = posicion.coords.latitude;
    	longitud = posicion.coords.longitude;
        var image = "https://mapicons.mapsmarker.com/markers/transportation/road-transportation/car/?custom_color=000000";
    	var miUbicacion = new google.maps.Marker({
    		position: {lat:latitud, lng:longitud},
    		animation: google.maps.Animation.DROP,
    		map: map,
    		icon:image + "car.png"
    	});
    	map.setZoom(17);
    	map.setCenter({lat:latitud, lng:longitud});
    }
   var functionError = function (error) {
	alert("tenemos un problema con encontrar tu ubicación");
	}
} 