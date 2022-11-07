
import ItemPronosticoExtendido from './ItemPronosticoExtendido'
import './PronosticoExtendido.scss'

export default function PronosticoExtendido({ listaDiasPronosticoExtendido }) {

    return (
        <section className='contenedor-PronosticoExtendido'>
            <h3>Pronostico extendido</h3>
            <div className='contenedor-lista-dias-PronosticoExtendido'>
                {listaDiasPronosticoExtendido.map((dia, index) => {
                    return <ItemPronosticoExtendido 
                                key={index}
                                nombreMes={dia.monthName}
                                nombreDia={dia.dayName}
                                numeroDia={dia.dayNumber}
                                temperaturaMin={dia.temperatureMin}
                                temperaturaMax={dia.temperatureMax}
                                descripcion={dia.selectedDescription}
                                icono={dia.selectedIcon}
                            />
                })}
            </div>
        </section>
       
    )
}

