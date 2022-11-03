// SIMULA LLAMADA A LA API PIDIENDOLE DATOS DE 5 CIUDADES
// Datos sacados de las bases de datos de OpenWeatherMap

export default function useListaCiudades(props) {
    const LISTA_CIUDADES = [
        {
            "id": 3837856,
            "name": "San Carlos de Bariloche",
            "state": "",
            "country": "AR",
            "coord": {
                "lon": -71.300003,
                "lat": -41.150002
            }
        },
        {
            "id": 3832791,
            "name": "Villa Carlos Paz",
            "state": "",
            "country": "AR",
            "coord": {
                "lon": -64.49778,
                "lat": -31.424141
            }
        },
        {
            "id": 3863502,
            "name": "Cafayate",
            "state": "",
            "country": "AR",
            "coord": {
                "lon": -65.833328,
                "lat": -26.08333
            }
        },
        {
            "id": 3833367,
            "name": "Ushuaia",
            "state": "",
            "country": "AR",
            "coord": {
                "lon": -68.300003,
                "lat": -54.799999
            }
        },
        {
            "id": 3429777,
            "name": "Puerto Iguazú",
            "state": "",
            "country": "AR",
            "coord": {
                "lon": -54.573551,
                "lat": -25.599119
            }
        },
    ]



    return {LISTA_CIUDADES};
}
