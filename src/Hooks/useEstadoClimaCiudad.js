import { useEffect, useState } from 'react';
import { getEstadoClima, getPronosticoExtendido } from '../Servicios/getEstadoClima';

export default function useEstadoClimaCiudad(props) {
    const [loadingEC, setLoadigEC] = useState(false)
    const [loadingPE, setLoadigPE] = useState(false)
    const [cityDate, setCityDate] = useState({})
    const [weatherDate, setWatherDate] =useState({})
    const [listDaysExtendedForecast, setListDaysExtendedForecast ]= useState([])

    useEffect(function() {
        setLoadigEC(true)
        getEstadoClima({}).then(respuestaEC => {                                                                                  // Cada vez que se busca un nuevo producto, trae la primer pagina 
            setCityDate(respuestaEC.cityDate)
            setWatherDate(respuestaEC.forecastWeather)
            setLoadigEC(false)  
        })
    
    },[])
    useEffect(function(){
        setLoadigPE(true)
        getPronosticoExtendido({}).then(respuestaPE =>{
            setListDaysExtendedForecast(respuestaPE.listDays)
            setLoadigPE(false)
        })
    },[])

    return {loadingEC, loadingPE, cityDate, weatherDate, listDaysExtendedForecast};
}
