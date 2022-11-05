import { useEffect, useState } from "react"
import{ getLocalizacionUsuario}  from '../Sensores/getLocalizacionUsuario';
import { CIUDAD_DEFAULT } from "../VariablesGlobales/VariablesGlobales";


export default function useGeolocalizacion() {
    const [ loadingGEO, setLoadingGEO]=useState()
    const [ coordenadasActuales, setCoordenadasActuales]=useState({ lon: CIUDAD_DEFAULT[0].coord.lon, lat: CIUDAD_DEFAULT[0].coord.lat })
    useEffect(()=>{
        setLoadingGEO(true)
        getLocalizacionUsuario().then(respuesta => {
            setCoordenadasActuales(respuesta.coordenadasGeo)
            setLoadingGEO(false)
        })
    },[])

    return {coordenadasActuales, loadingGEO}
} 