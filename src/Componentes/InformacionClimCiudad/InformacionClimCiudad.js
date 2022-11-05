import React from 'react';

import './InformacionClimCiudad.scss'


export default function InformacionClimCiudad({datosCiudad, datosClima}) {
    return (
        <div>
            <h1>{datosCiudad.name}</h1>
            <h2>{datosClima.description}</h2>
            <ul>
                <li>Temperatura Actual: {datosClima.temperature}°C</li>
                <li>Sensacion Termica: {datosClima.thermalSensation}°C</li>
                <li>Temp Min: {datosClima.temperatureMin}°C</li>
                <li>Temp Max: {datosClima.temperatureMax}°C</li>
                <li>Presion Atmosferica: {datosClima.atmosphericPressure} hPa</li>
                <li>Velocidad del viento: {datosClima.windSpeed} mtr/s</li>
                <li>Dirección del viento: {datosClima.windSpeed} grados meteorológicos</li>
                <li>Ráfaga de viento: {datosClima.windGust} mtr/s</li>
                <li>Nubosidad: {datosClima.clouds}%</li>
                <li>Humedad: {datosClima.humidity}%</li>
                <li>Visibilidad: {datosClima.visibility} mts</li>
            </ul>
            <p>Hora de cálculo de datosHora de cálculo de datos:  {datosClima.date} hs</p>
        </div>
    )
}

