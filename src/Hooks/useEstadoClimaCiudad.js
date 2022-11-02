import { useEffect, useState } from 'react';
import { getEstadoClima } from '../Servicios/getEstadoClima';

export default function useEstadoClimaCiudad({}) {
    const [loading, setLoadig] = useState(false)
    const [cityDate, setCityDate] = useState({})
    const [weatherDate, setWatherDate] =useState({})

    useEffect(function() {
        setLoadig(true)
        getEstadoClima({}).then(respuesta => {                                                                                  // Cada vez que se busca un nuevo producto, trae la primer pagina 
            setCityDate(respuesta.cityDate)
            setWatherDate(respuesta.forecastWeather)
            setLoadig(false)  
        })
    
    },[])

    return {loading, cityDate, weatherDate};
}
