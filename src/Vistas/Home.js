import React, {  useState } from 'react';
import useEstadoClimaCiudad from '../Hooks/useEstadoClimaCiudad';
import useGeolocalizacion from '../Hooks/useGeolocalizacion';
import useListaCiudadesSelector from '../Hooks/useListaCiudadesSelector';

import './Home.scss'

export default function Home(props) {

    const {coordenadasActuales, loadingGEO}= useGeolocalizacion()       // Se obtinen las cordenadas de la ubicacion actual
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
    
    console.log(ciudadActualGEO[0].coord)
    

    const {listaUbicacionCiudades}=useListaCiudadesSelector({           // Lista con los datos de la Ubicacion, de las ciudades que se manden por parametros
        ciudades:[
            'San Carlos de Bariloche', 
            'Villa Carlos Paz', 
            'Cafayate', 
            'Ushuaia', 
            'Puerto Iguazú',
            ],
        corrdenadasGEO:coordenadasActuales
    })

    const listaCiudadesSelector = [                                     // Se arma el Array para el SELECT, con el formato [GEOLOCALIZACION(Ubicacion Actial),OTRAS CIUDADES(ciudades)]
        {   tipo:'GEOLOCALIZACION', 
            opciones: ciudadActualGEO 
        },
        {   tipo:'OTRAS CIUDADES', 
            opciones: listaUbicacionCiudades
        }
    ]

    
    const [ciudadSeleccionada, setCiudadSeleccionada]=useState(ciudadActualGEO[0])       // Cuidad Seleccionada en el SELECT

    function handleChangeCity(id){                                                      // Metodo de seleccion del SELECT
        let city
        if (id==="AU00000"){
            city = listaCiudadesSelector[0].opciones
        } else {
            city = listaUbicacionCiudades.filter((city,i) => city.id === Number(id))
        }
        setCiudadSeleccionada(city[0])
    }

    const {loadingEC, loadingPE, cityDate, weatherDate, listDaysExtendedForecast}=useEstadoClimaCiudad({lat:ciudadSeleccionada.coord.lat, lng:ciudadSeleccionada.coord.lon })     // Llamada al servicio con los parametros seleccionados en el SELECT

    return (
        <div >
        { loadingGEO                                                                                                         // Si esta cargado muestra Placehoder y cuando termina de cargar muestra el Listado De Productos
            ?   <h1>BIENVENIDO</h1>
            :   <>
             <section  className='contenedor-seccion-seleccionarCiudad-Home'>
                        <select name="cars" id="cars"  onChange={(e)=>{handleChangeCity(e.target.value)}}>
                            {listaCiudadesSelector.map((grupo,i)=>{
                                return(
                                    <optgroup label={grupo.tipo} key={`select-${grupo.tipo}-${i}`}>
                                        {grupo.opciones.map((opcion,e)=>{
                                            return(
                                                <option value={opcion.id} key={`option-${e}`} >{opcion.name}</option>
                                            )
                                        })}
                                    </optgroup> 
                                )
                            })}
                        </select>
            </section>
            { loadingEC                                                                                                          // Si esta cargado muestra Placehoder y cuando termina de cargar muestra el Listado De Productos
            ?   <h1>CARGANDO...</h1>
            :   <>
                    <section className='contenedor-seccion-ciudadSeleccionada-Home'>
                        <h1>{cityDate.name}</h1>
                        <h2>{weatherDate.description}</h2>
                        <h3>Pronostico Actual</h3>
                        <ul>
                            <li>Temperatura Actual: {weatherDate.temperature}°C</li>
                            <li>Sensacion Termica: {weatherDate.thermalSensation}°C</li>
                            <li>Temp Min: {weatherDate.temperatureMin}°C</li>
                            <li>Temp Max: {weatherDate.temperatureMax}°C</li>
                            <li>Presion Atmosferica: {weatherDate.atmosphericPressure} hPa</li>
                            <li>Velocidad del viento: {weatherDate.windSpeed} mtr/s</li>
                            <li>Dirección del viento: {weatherDate.windSpeed} grados meteorológicos</li>
                            <li>Ráfaga de viento: {weatherDate.windGust} mtr/s</li>
                            <li>Nubosidad: {weatherDate.clouds}%</li>
                            <li>Humedad: {weatherDate.humidity}%</li>
                            <li>Visibilidad: {weatherDate.visibility} mts</li>
                        </ul>
                        <p>Hora de cálculo de datosHora de cálculo de datos:  {weatherDate.date} hs</p>
                    </section>        
                </>
            }
            { loadingPE                                                                                                          // Si esta cargado muestra Placehoder y cuando termina de cargar muestra el Listado De Productos
                ?   <h1>CARGANDO...</h1>
                :   <>
                    <section className='contenedor-seccion-pronosticoExtendido-Home'>
                        Pronostico extendido
                        <div className='contenedor-dias-posteriores-Home'>
                            {listDaysExtendedForecast.map((dia,index)=>{
                                return <div key={index} className='contenedor-dia-Home'>
                                            <p>{dia.day}</p>
                                            <p>{dia.descriptions[0]}</p>
                                            <p>Min: {dia.temperatureMin}°C</p>
                                            <p>Max: {dia.temperatureMax}°C</p>
                                        </div>    
                            })}                    
                        </div>
                    </section>                 
                    </>
            }
            </>
        }  
        </div>
    );
}