import React, { useEffect, useState } from 'react';
import useDireccionViento from '../../Hooks/useDireccionViento';

import './InformacionClimaCiudad.scss'


export default function InformacionClimaCiudad({ datosCiudad, datosClima }) {
    const [icon, setIcon] = useState('na')
    const [windDeg, setWindDeg] = useState('')

    const { direccionViento } = useDireccionViento(datosClima.windDirectionDeg)

    useEffect(() => {
        setIcon(datosClima.icon)
        setWindDeg(direccionViento)
    }, [datosClima.icon])

    return (
        <section className='contenedor-InformacionClimaCiudad'>
            <header>
                <h1>{datosCiudad.name}</h1>
            </header>
            <div className='contenedor-datos-clima-InformacionClimCiudad'>
                <article >
                    <div className='item-InformacionClimCiudad item1-IC'>
                        <div className='contenedor-temperatura-actual'>
                            <h1 className='datoTemperatura-InformacionClimCiudad'>{datosClima.temperature}</h1><b>°C</b>
                        </div>
                        <div className='separador' />
                        <p>Sensacion Termica: <b>{datosClima.thermalSensation}°C</b></p>
                    </div>

                    <div className='item-InformacionClimCiudad item2-IC'>
                        <p>Min: <b>{datosClima.temperatureMin}°C</b></p>
                        <div className='separador2' />
                        <p>Presion Atm: <b>{datosClima.atmosphericPressure} hPa</b></p>
                        <div className='separador2' />
                        <p>Humedad:<br /> <b>{datosClima.humidity}%</b></p>
                    </div>
                    <div className='item-InformacionClimCiudad item3-IC'
                        style={{ backgroundImage: `url(${require(`../../Imagenes/IconosClima/${icon}.png`)})` }}
                    />
                    <div className='item-InformacionClimCiudad item4-IC'>
                        <p>Max: <b>{datosClima.temperatureMax}°C</b></p>
                        <div className='separador2' />

                        <p>Visibilidad: <b>{datosClima.visibility} mts</b></p>
                        <div className='separador2' />

                        <p>Nubosidad:<br /> <b>{datosClima.clouds}%</b></p>
                    </div>

                    <div className='item-InformacionClimCiudad item5-IC'>
                        <h2>{datosClima.description}</h2>
                        <div className='separador' />
                        <p>{windDeg} - Vientos de <b>{datosClima.windSpeed} km/h</b> con ráfagas de <b>{datosClima.windGust} km/h</b></p>
                        <p>Utima Actualizacion:  </p>
                        <div className='contenedor-hora-actualizacion'>
                            <h3>{datosClima.dateHourMinute}</h3>
                            <div>
                                <b>{datosClima.dateDayMoment}</b>
                                <p>{datosClima.dateWeekday}</p>
                            </div>

                        </div>

                    </div>
                </article>
            </div>
        </section>
    )
}

