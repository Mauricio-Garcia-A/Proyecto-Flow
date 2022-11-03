import { useEffect, useState } from 'react';
import { getEstadoClima, getPronosticoExtendido } from '../Servicios/getEstadoClima';

export default function useEstadoClimaCiudad({lat, lng }) {
    const [loadingEC, setLoadigEC] = useState(false)
    const [loadingPE, setLoadigPE] = useState(false)
    const [cityDate, setCityDate] = useState({})
    const [weatherDate, setWatherDate] =useState({})
    const [listDaysExtendedForecast, setListDaysExtendedForecast ]= useState([])

    useEffect(function() {
        setLoadigEC(true)
        getEstadoClima({lat, lng}).then(respuestaEC => {                                                                                  // Cada vez que se busca un nuevo producto, trae la primer pagina 
            setCityDate(respuestaEC.cityDate)
            setWatherDate(respuestaEC.forecastWeather)
            setLoadigEC(false)  
        })
    
    },[lat,lng])
    useEffect(function(){
        setLoadigPE(true)
        getPronosticoExtendido({lat, lng}).then(respuestaPE =>{
            setListDaysExtendedForecast(respuestaPE.listDays)
            setLoadigPE(false)
        })
    },[lat,lng])

    return {loadingEC, loadingPE, cityDate, weatherDate, listDaysExtendedForecast};
}
