import React from 'react';
import './PronosticoExtendido.scss'

export default function ItemPronosticoExtendido({index, nombreMes, nombreDia, numeroDia, temperaturaMin, temperaturaMax, descripcion, icono} ) {

    return (
        <div className='contenedor-ItemPronosticoExtendido'>
            <div className='contenedor-datos-fecha-IPE'>
                <b>{nombreMes}</b>
                <h1>{nombreDia} <span>{numeroDia}</span></h1>
            </div>
            <div className='separador'/>
            <div className='contenedor-datos-temperatura-IPE'>
                <p>Min: {temperaturaMin}°C</p>
                <p>Max: {temperaturaMax}°C</p>
            </div>

            <div className='icono-clima-ItemPronosticoExtendido'
                style={{ backgroundImage: `url(${require(`../../Imagenes/IconosClima/${icono}.png`)})` }}
            />
            
            <h2>{descripcion}</h2>
        </div>
    )
}

