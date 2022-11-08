import { useEffect, useState } from 'react'
import { LISTA_CIUDADES } from '../Helpers/ListaCiudades'

export default function useListaCiudadesSelector({ ciudades = [], corrdenadasGEO }) {
    var ciudadDefault= [{                                          // Ciudad con los datos de la Ciudad Actual
        "id": "AU00000",
        "name": "Ubicacion Actual",
        "state": "",
        "country": "NN",
        "coord": {
            "lon": corrdenadasGEO.lon,
            "lat": corrdenadasGEO.lat
        }
    }]

    const [listaCiudadesSelector, setListaCiudadesSelector] = useState([
        {
            tipo: 'GEOLOCALIZACION',
            opciones: ciudadDefault
        },
        {
            tipo: 'OTRAS CIUDADES',
            opciones: ciudadDefault
        }

    ])

    useEffect(() => {
        var listaUbicacionCiudades = []

        LISTA_CIUDADES.forEach(LC => {
            ciudades.forEach(c => {
                if (LC.name === c) {
                    listaUbicacionCiudades.push(LC)
                }
            })
        })

        var ciudadActualGEO = [{                                          // Ciudad con los datos de la Ciudad Actual
            "id": "AU00000",
            "name": "Ubicacion Actual",//MAR DEL PLATA
            "state": "",
            "country": "NN",
            "coord": {
                "lon": corrdenadasGEO.lon,
                "lat": corrdenadasGEO.lat
            }
        }]

        const listaSelector = [                                     // Se arma el Array para el SELECT, con el formato [GEOLOCALIZACION(Ubicacion Actial),OTRAS CIUDADES(ciudades)]
            {
                tipo: 'GEOLOCALIZACION',
                opciones: ciudadActualGEO
            },
            {
                tipo: 'OTRAS CIUDADES',
                opciones: listaUbicacionCiudades
            }
        ]
        setListaCiudadesSelector(listaSelector)

    }, [corrdenadasGEO.lat])


    return { listaCiudadesSelector,ciudades };
}
