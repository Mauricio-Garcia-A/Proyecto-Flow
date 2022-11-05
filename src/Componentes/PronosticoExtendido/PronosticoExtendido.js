import React from 'react'
import './PronosticoExtendido.scss'

export default function PronosticoExtendido({listaDiasPronosticoExtendido}) {
    return (
        <div>
            Pronostico extendido
            <div className='contenedor-dias-posteriores-Home'>
                {listaDiasPronosticoExtendido.map((dia, index) => {
                    return <div key={index} className='contenedor-dia-Home'>
                        <p>{dia.day}</p>
                        <p>{dia.descriptions[0]}</p>
                        <p>Min: {dia.temperatureMin}°C</p>
                        <p>Max: {dia.temperatureMax}°C</p>
                    </div>
                })}
            </div>
        </div>
    )
}

