import { CIUDAD_DEFAULT } from "../VariablesGlobales/VariablesGlobales"

// Configuraciones de la URL del servicio API
export const API_URL = 'https://api.openweathermap.org/data/2.5'        // URL del servicio
export const API_Key = '28fb00e1aa9a112fab72c1c5c9ed2f34'               // Key de usuario
export const UNITS='metric'                                             // Unidades de medidas en Grados Cecius [Fahrenheit=(imperial), Celsius=(metric), Kelvin=(default)]
export const LANG='es'                                                  // Idioma del sesultado Español (es - sp)

// Coordenadas de ciudad por default (Buenos Aires)
export const LAT_Default=CIUDAD_DEFAULT[0].coord.lat
export const LNG__Default=CIUDAD_DEFAULT[0].coord.lon