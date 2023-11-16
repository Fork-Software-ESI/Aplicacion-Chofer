var map;
var markersArray = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: -34.8897236, lng: -56.1656073 }
    });

    document.getElementById('rutaForm').addEventListener('submit', function (event) {
        event.preventDefault();

        var ID_Camion = document.getElementById('ID_Camion').value;

        fetch('http://localhost:8002/api/ruta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ID_Camion: ID_Camion
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data) && data.length > 0) {
                    addMarkersAndRoutes(data);
                } else {
                    console.error('Error en la respuesta del servidor');
                }
            })
            .catch(error => {
                console.error('Error al realizar la solicitud POST', error);
            });
    });
}

var directionsRenderer;


function addMarkersAndRoutes(puntos) {
    if (!map) {
        console.error('Error: El mapa no está inicializado.');
        return;
    }

    clearMarkersAndRoute();

    var directionsService = new google.maps.DirectionsService;

    directionsRenderer = new google.maps.DirectionsRenderer({
        map: map
    });

    var request = {
        origin: { lat: puntos[0].latitude, lng: puntos[0].longitude },
        destination: { lat: puntos[0].latitude, lng: puntos[0].longitude },
        waypoints: puntos.slice(1).map(function (p) {
            return { location: { lat: p.latitude, lng: p.longitude }, stopover: true };
        }),
        travelMode: 'DRIVING'
    };

    directionsService.route(request, function (result, status) {
        if (status == 'OK') {
            directionsRenderer.setDirections(result);

            var origenMarker = new google.maps.Marker({
                position: request.origin,
                map: map,
                icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                title: 'Origen'
            });

            var destinoMarker = new google.maps.Marker({
                position: request.destination,
                map: map,
                icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                title: 'Destino'
            });

            markersArray.push(origenMarker, destinoMarker);
        } else {
            console.error('Error al obtener la ruta:', status);
        }
    });
}

function clearMarkersAndRoute() {
    if (markersArray) {
        for (var i = 0; i < markersArray.length; i++) {
            markersArray[i].setMap(null);
        }
        markersArray = [];
    }

    if (directionsRenderer) {
        directionsRenderer.setMap(null);
    } else {
        directionsRenderer = new google.maps.DirectionsRenderer({
            map: map
        });
    }
}

initMap();