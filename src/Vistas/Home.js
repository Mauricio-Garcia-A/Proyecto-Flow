import React from 'react';

import './Home.scss'

export default function Home(props) {
    const ciudades=['Ciudad-01','Ciudad-02','Ciudad-03','Ciudad-04','Ciudad-05']
    const pronosticoExtendido=['Dia 1','Dia 2','Dia 3','Dia 4','Dia 5',]
    const ciudadSeleccionada={
                                TemperaturaActua:30,
                                SensacionTermica:29,
                                TemperaturaMin:16,
                                TemperaturaMax:32,
                                PresionAtmosferica: 20,
                                VelocidadViento: 10,
                                DirecciónViento: "Noroeste",
                                RafagaViento: 20,
                                Nubosidad: 'Parcialmente Nublado',
                                VolumenLluvia:10, 
                                horaActualizada: '10:30 am'
                            }
    return (
        <div >
            <section className='contenedor-seccion-seleccionarCiudad-Home'>
                <select name="cars" id="cars">
                    {ciudades.map((ciudad,index)=>{
                        return <option  key={index} value={ciudad}>{ciudad}</option>
                    })}
                </select>
            </section>
            <section className='contenedor-seccion-ciudadSeleccionada-Home'>
                <h1>CIUDAD Actual</h1>
                <h3>Pronostico Actual</h3>
                <ul>
                    <li>Temperatura Actual: {ciudadSeleccionada.TemperaturaActua}</li>
                    <li>Sensacion Termica: {ciudadSeleccionada.SensacionTermica}</li>
                    <li>Temp Min: {ciudadSeleccionada.TemperaturaMin}</li>
                    <li>Temp Max: {ciudadSeleccionada.TemperaturaMax}</li>
                    <li>Presion Atmosferica: {ciudadSeleccionada.PresionAtmosferica}</li>
                    <li>Velocidad del viento: {ciudadSeleccionada.VelocidadViento}</li>
                    <li>Dirección del viento: {ciudadSeleccionada.DirecciónViento}</li>
                    <li>Ráfaga de viento: {ciudadSeleccionada.RafagaViento}</li>
                    <li>Nubosidad: {ciudadSeleccionada.Nubosidad}</li>
                    <li>Volumen de lluvia de la última hora: {ciudadSeleccionada.VolumenLluvia}</li>
                </ul>
                <p>Hora de cálculo de datosHora de cálculo de datos:  {ciudadSeleccionada.horaActualizada} </p>
            </section>
            <section className='contenedor-seccion-pronosticoExtendido-Home'>
                Pronostico extendido
                <div className='contenedor-dias-posteriores-Home'>
                    {pronosticoExtendido.map((dia,index)=>{
                        return <div key={index} className='contenedor-dia-Home'>{dia}</div>
                    })}                    
                </div>
            </section>
        </div>
    );
}
