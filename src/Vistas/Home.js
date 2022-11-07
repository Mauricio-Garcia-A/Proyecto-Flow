import React, { useState } from 'react';
import InformacionClimaCiudad from '../Componentes/InformacionClimaCiudad/InformacionClimaCiudad';
import PlaceholderInformacionClimaCiudad from '../Componentes/InformacionClimaCiudad/PlaceholderInformacionClimaCiudad';
import PlaceholderPronosticoExtendido from '../Componentes/PronosticoExtendido/PlaceholderPronosticoExtendido';
import PronosticoExtendido from '../Componentes/PronosticoExtendido/PronosticoExtendido';
import SelectorCiudades from '../Componentes/SelectorCiudades/SelectorCiudades';
import useEstadoClimaCiudad from '../Hooks/useEstadoClimaCiudad';
import useGeolocalizacion from '../Hooks/useGeolocalizacion';
import useListaCiudadesSelector from '../Hooks/useListaCiudadesSelector';
import useSEO from '../Hooks/useSEO';

import './Home.scss'

export default function Home(props) {

    const { coordenadasActuales, loadingGEO } = useGeolocalizacion()       // Se obtinen las cordenadas de la ubicacion actual
    /*
    const [ciudadActualGEO, setCiudadActualGEO]=useState(               // Ciudad con los datos de la Ciudad Actual
        [{                                        
            "id": "AU00000",
            "name": "Ubicacion Actual",
            "state": "",
            "country": "NN",
            "coord": {
                "lon": coordenadasActuales.lon,
                "lat": coordenadasActuales.lat
            }
        }]
    )
    useEffect(()=>{
        setCiudadActualGEO([{
            "id": "AU00000",
            "name": "CIUDAD GEOLOCALIZADA",
            "state": "",
            "country": "NN",
            "coord": {
                "lon": coordenadasActuales.lon,
                "lat": coordenadasActuales.lat
            }
        }])
    },[coordenadasActuales.lat,coordenadasActuales.lon])
    */

    var ciudadActualGEO = [{                                          // Ciudad con los datos de la Ciudad Actual
        "id": "AU00000",
        "name": "Ubicacion Actual",//MAR DEL PLATA
        "state": "",
        "country": "NN",
        "coord": {
            "lon": coordenadasActuales.lon,
            "lat": coordenadasActuales.lat
        }
    }]




    const { listaUbicacionCiudades } = useListaCiudadesSelector({           // Lista con los datos de la Ubicacion, de las ciudades que se manden por parametros
        ciudades: [
            'San Carlos de Bariloche',
            'Villa Carlos Paz',
            'Cafayate',
            'Ushuaia',
            'Puerto Iguazú',
        ],
        corrdenadasGEO: coordenadasActuales
    })

    const listaCiudadesSelector = [                                     // Se arma el Array para el SELECT, con el formato [GEOLOCALIZACION(Ubicacion Actial),OTRAS CIUDADES(ciudades)]
        {
            tipo: 'GEOLOCALIZACION',
            opciones: ciudadActualGEO
        },
        {
            tipo: 'OTRAS CIUDADES',
            opciones: listaUbicacionCiudades
        }
    ]


    const [ciudadSeleccionada, setCiudadSeleccionada] = useState(ciudadActualGEO[0])       // Cuidad Seleccionada en el SELECT

    function handleChangeCity(id) {                                                      // Metodo de seleccion del SELECT
        let city
        if (id === "AU00000") {
            city = listaCiudadesSelector[0].opciones
        } else {
            city = listaUbicacionCiudades.filter((city, i) => city.id === Number(id))
        }
        setCiudadSeleccionada(city[0])
    }

    const { loadingEC, loadingPE, cityDate, weatherDate, listDaysExtendedForecast } = useEstadoClimaCiudad({ lat: ciudadSeleccionada.coord.lat, lng: ciudadSeleccionada.coord.lon })     // Llamada al servicio con los parametros seleccionados en el SELECT

    const tituloSeoM = loadingEC ? 'Cargando...' : `Clima en ${ciudadSeleccionada.name} `
    const descripcionSeoM = `App Pronostico de Clima - challlenge para Telecom-Flow`
    useSEO({title: tituloSeoM, description: descripcionSeoM})

    return (
    <div className="contenedor-pricipal-Home ">   
        <div className='contenedor-seccion-pronostico-Home seccion-estandar'>
            {loadingGEO                                                                                                         // Si esta cargado muestra Placehoder y cuando termina de cargar muestra el Listado De Productos
                ? <h1>BIENVENIDO A LA APP DEL CLIMA</h1>
                : <>
                    <SelectorCiudades
                        listaSelector={listaCiudadesSelector}
                        handleChange={(e) => handleChangeCity(e.target.value)}
                    />
                    {loadingEC                                                                                                          // Si esta cargado muestra Placehoder y cuando termina de cargar muestra el Listado De Productos
                        ? <PlaceholderInformacionClimaCiudad />
                        : <>
                            <InformacionClimaCiudad datosCiudad={cityDate} datosClima={weatherDate} />
                        </>
                    }
                    {loadingPE                                                                                                          // Si esta cargado muestra Placehoder y cuando termina de cargar muestra el Listado De Productos
                        ? <PlaceholderPronosticoExtendido />
                        : <>
                            
                            <PronosticoExtendido listaDiasPronosticoExtendido={listDaysExtendedForecast} />
                        </>
                    }
                </>
            }
        </div>
    </div>
    );
}