import { API_URL, API_Key, UNITS, LANG, LAT_Default,LNG__Default} from "./Configuracion"

export function getEstadoClima({lat=LAT_Default, lng=LNG__Default }) {
    const API_URL_CONSULTAR_CLIMA= `${API_URL}/weather?lat=${lat}&lon=${lng}&appid=${API_Key}&units=${UNITS}&lang=${LANG}`
    
    return fetch(API_URL_CONSULTAR_CLIMA)                                                         // Se hace la llamada a la API
    .then(response=>response.json())                                                            // Se convierte la respuesta a JSON
    .then(data => { 
        const {weather, main, visibility, wind, clouds, name, sys, dt }=data
        const cityDate = {
            id:sys.id,
            name: name,
            country:sys.country
        }
        const forecastWeather = {
            description: weather[0].description,        // Descripcion clima
            temperature: main.temp,                     // (°C) Temperatura Actual  
            temperatureMin:main.temp_min,               // (°C) Temperatura Min de la utima hora 
            temperatureMax:main.temp_max,               // (°C) Temperatura Actual Max de la utima hora 
            thermalSensation:main.feels_like,           // (°C) Sensacion termica 

            atmosphericPressure:main.pressure,          // (hPa) Precion atmosferica
            humidity:main.humidity,                     // (%) Humedad

            visibility:visibility,                      // (metros) Visibilidad

            clouds:clouds.all,                          // (%) Nubosidad
            
            windSpeed: wind.speed,                     // (metro/seg) Velocidad del viento
            windDirection:wind.deg,                    // (grados meteorológicos) Dirección del viento, 
            windGust:wind.gust,                        // (metro/seg) Ráfaga de viento.
            
            date:new Date(dt*1000).toLocaleTimeString('es-AR', { hour12: false })  // Hora de actualizacion del registro climatico
        }
        console.log(forecastWeather.date)
        return {cityDate, forecastWeather}             
    })
    .catch(error => {console.log('Error Servicio')}) 
}