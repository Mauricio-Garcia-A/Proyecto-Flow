import React, { useEffect, useState } from 'react';
import useEstadoClimaCiudad from '../Hooks/useEstadoClimaCiudad';
import useListaCiudades from '../Hooks/useListaCiudades';

import './Home.scss'

export default function Home(props) {

    const CIUDAD_ACTUAL = [{
        "id": "AU00000",
        "name": "CIUDAD GEOLOCALIZADA",
        "state": "",
        "country": "NN",
        "coord": {
            "lon": -57.557541,
            "lat": -38.002281
        }
    }]
    const [ciudadSeleccionada, setCiudadSeleccionada]=useState(CIUDAD_ACTUAL[0])
    
    const {LISTA_CIUDADES} = useListaCiudades()

    const LISTA_SELECTOR_CIUDADES = [
        {   tipo:'Ubicacion actual', 
            opciones: CIUDAD_ACTUAL 
        },
        {   tipo:'Otras ciudades', 
            opciones: LISTA_CIUDADES
        }
    ]
    
    function handleChangeCity(id){
        let city
        if (id==="AU00000"){
            city = CIUDAD_ACTUAL
        } else {
            city = LISTA_CIUDADES.filter((city,i) => city.id == id)
        }
        setCiudadSeleccionada(city[0])
    }

    const {loadingEC, loadingPE, cityDate, weatherDate, listDaysExtendedForecast}=useEstadoClimaCiudad({lat:ciudadSeleccionada.coord.lat, lng:ciudadSeleccionada.coord.lon })

    return (
        <div >
             <section  className='contenedor-seccion-seleccionarCiudad-Home'>
                        <select name="cars" id="cars"  onChange={(e)=>{handleChangeCity(e.target.value)}}>
                            {LISTA_SELECTOR_CIUDADES.map((grupo,i)=>{
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
        </div>
    );
}
