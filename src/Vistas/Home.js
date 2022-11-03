import React from 'react';
import useEstadoClimaCiudad from '../Hooks/useEstadoClimaCiudad';

import './Home.scss'

export default function Home(props) {
    const ciudades=['Ciudad-01','Ciudad-02','Ciudad-03','Ciudad-04','Ciudad-05']

    const {loadingEC, loadingPE, cityDate, weatherDate, listDaysExtendedForecast}=useEstadoClimaCiudad({})
    return (
        <div >
             <section className='contenedor-seccion-seleccionarCiudad-Home'>
                        <select name="cars" id="cars">
                            {ciudades.map((ciudad,index)=>{
                                return <option  key={index} value={ciudad}>{ciudad}</option>
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
