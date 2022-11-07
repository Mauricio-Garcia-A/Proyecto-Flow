import { useEffect, useState } from "react"
import{ getLocalizacionUsuario}  from '../Sensores/getLocalizacionUsuario';

export default function useGeolocalizacion() {
    const [ loadingGEO, setLoadingGEO]=useState()
    const [ coordenadasActuales, setCoordenadasActuales]=useState({})
    useEffect(()=>{
        setLoadingGEO(true)
        getLocalizacionUsuario().then(respuesta => {
            setCoordenadasActuales(respuesta.coordenadasGeo)
            setLoadingGEO(false)
        })
    },[])

    return {coordenadasActuales, loadingGEO}
} 