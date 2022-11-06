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
            description: weather[0].description.toUpperCase(),  // Descripcion clima (en MAYUSCULA)
            icon: weather[0].icon,                              // Codigo del icono
            temperature: main.temp.toFixed(1),                  // (°C) Temperatura Actual  
            temperatureMin:main.temp_min.toFixed(1),            // (°C) Temperatura Min de la utima hora 
            temperatureMax:main.temp_max.toFixed(1),            // (°C) Temperatura Actual Max de la utima hora 
            thermalSensation:main.feels_like.toFixed(1),        // (°C) Sensacion termica 

            atmosphericPressure:main.pressure,          // (hPa) Precion atmosferica
            humidity:main.humidity,                     // (%) Humedad

            visibility:visibility,                      // (metros) Visibilidad

            clouds:clouds.all,                          // (%) Nubosidad
            
            windSpeed: (wind.speed*(1000/3600)).toFixed(1),         // (km/h) Velocidad del viento
            windDirectionDeg:wind.deg,                    // (grados meteorológicos) Dirección del viento, 
            windGust:(wind.gust*(1000/3600)).toFixed(1),            // (km/h) Ráfaga de viento.
            dateTime:dt,
            dateWeekday:new Date(dt*1000).toLocaleDateString('es-AR', { weekday:"short"}).toUpperCase(),  // Nombre del dia de la semana abreviado (LUN,MAR, MIE....)
            dateHourMinute:new Date(dt*1000).toLocaleTimeString("en-AR", {hour12: true, hour: "2-digit",minute: "2-digit"}).split(' ')[0],  // Hora de actualizacion del registro climatico formato ('12:23'), AM])
            dateDayMoment:new Date(dt*1000).toLocaleTimeString("en-AR", {hour12: true, hour: "2-digit",minute: "2-digit"}).split(' ')[1] // Momento del dia (PM, AM)
        }
        
        return {cityDate, forecastWeather}             
    })
    .catch(error => {console.log('Error Servicio Estado Clima Actual')}) 
}


export function getPronosticoExtendido({lat=LAT_Default, lng=LNG__Default}) {
    const API_URL_CONSULTAR_CLIMA= `${API_URL}/forecast?lat=${lat}&lon=${lng}&appid=${API_Key}&units=${UNITS}&lang=${LANG}`
    
    return fetch(API_URL_CONSULTAR_CLIMA)                                                         // Se hace la llamada a la API
    .then(response=>response.json())                                                            // Se convierte la respuesta a JSON
    .then(data => { 
        const {list}=data
        const result = list.map((item) =>{ 
            let day =new Date(item.dt*1000).toLocaleDateString('es-AR') //Fecha
            //console.log(new Date(dt*1000).toLocaleDateString('es-AR', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) )

            let description=item.weather[0].description         // Descripcion clima
            let temperature=item.main.temp                      // (°C) Temperatura Actual  
            /*
            let temperatureMin=item.main.temp_min               // (°C) Temperatura Min de la utima hora 
            let temperatureMax=item.main.temp_max               // (°C) Temperatura Actual Max de la utima hora 
            let thermalSensation=item.main.feels_like           // (°C) Sensacion termica 
            let atmosphericPressure=item.main.pressure          // (hPa) Precion atmosferica
            let humidity=item.main.humidity                     // (%) Humedad
            let visibility=item.visibility                      // (metros) Visibilidad
            let  clouds=item.clouds.all                         // (%) Nubosidad
            let windSpeed=item. wind.speed                      // (metro/seg) Velocidad del viento
            let windDirection=item.wind.deg                     // (grados meteorológicos) Dirección del viento 
            let windGust=item.wind.gust                         // (metro/seg) Ráfaga de viento.
            */
            return {day,description,temperature}
        })
        
        const fullListDays = result.reduce((prev, current, index, arr) => {                   // Utilizo el método reduce para ir creando el array resultante
            
            let exists = prev.find(x => x.day === current.day);                         // Compruebo si ya existe el elemento
            
            if (!exists) {                                                              // Si no existe lo creo con un array vacío en VALOR
                exists = {
                    day: current.day,
                    temperatures: [], 
                    descriptions:[], 
                    temperatureMin:current.temperature, 
                    temperatureMax:current.temperature 
                };
                prev.push(exists);
            }
            if (current.temperature != null){                                           // Si el elemento actual tiene temperature lo añado al array del elemento existente y actualizo las temraturas Min y Max
                exists.temperatures.push(current.temperature);
                if (current.temperature > exists.temperatureMax) {
                    exists.temperatureMax=current.temperature
                }
                if (current.temperature < exists.temperatureMin) {
                    exists.temperatureMin=current.temperature
                }
            }
              
            if ((current.description != null) && (exists.descriptions.indexOf(current.description) < 0)) {          // Si el elemento actual tiene descripcion y no esta repetido lo añado al array del elemento existente
                exists.descriptions.push(current.description);
            }

            return prev;                                                                 // Devuelvo el array resultado para la nueva iteración
        }, []);

        const currentDay = new Date().toLocaleDateString('es-AR');
        const listDays = fullListDays.filter(item => item.day !== currentDay);

        return {listDays}             
    })
    .catch(error => {console.log('Error Servicio Pronostico Extendido')}) 
}