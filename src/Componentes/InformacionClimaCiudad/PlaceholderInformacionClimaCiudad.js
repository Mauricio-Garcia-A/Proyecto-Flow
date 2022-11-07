import React from 'react';

export default function PlaceholderInformacionClimaCiudad() {
    
    return (
        <section className='placeholder contenedor-InformacionClimaCiudad ' >
            <header>
                <h1>CARGANDO...</h1>
            </header>
            <div className='contenedor-datos-clima-InformacionClimCiudad'>
                <article >
                    <div className='item-InformacionClimCiudad item1-IC'>
                        <div className='contenedor-temperatura-actual'>
                            <h1 className='datoTemperatura-InformacionClimCiudad'>00.0</h1><b>°C</b>
                        </div>
                        <div className='separador' />
                        <p>Sensacion Termica: <b>00.0°C</b></p>
                    </div>

                    <div className='item-InformacionClimCiudad item2-IC'>
                        <p>Min: <b>00.0°C</b></p>
                        <div className='separador2' />
                        <p>Presion Atm: <b>0000 hPa</b></p>
                        <div className='separador2' />
                        <p>Humedad:<br /> <b>00%</b></p>
                    </div>
                    <div className='item-InformacionClimCiudad item3-IC'
                        style={{ backgroundImage: `url(${require(`../../Imagenes/IconosClima/na.png`)})` }}
                    />
                    <div className='item-InformacionClimCiudad item4-IC'>
                        <p>Max: <b>00.0°C</b></p>
                        <div className='separador2' />

                        <p>Visibilidad: <b>00.0 mts</b></p>
                        <div className='separador2' />

                        <p>Nubosidad:<br /> <b>00%</b></p>
                    </div>

                    <div className='item-InformacionClimCiudad item5-IC'>
                        <h2>#########</h2>
                        <div className='separador' />
                        <p>#### - Vientos de <b>00.0 km/h</b> con ráfagas de <b>00.0 km/h</b></p>
                        <p>Utima Actualizacion:  </p>
                        <div className='contenedor-hora-actualizacion'>
                            <h3>00.00</h3>
                            <div>
                                <b>##</b>
                                <p>##</p>
                            </div>

                        </div>

                    </div>
                </article>
            </div>
        </section>
    )
}

