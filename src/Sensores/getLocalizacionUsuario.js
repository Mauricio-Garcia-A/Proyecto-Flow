import { CIUDAD_DEFAULT } from "../VariablesGlobales/VariablesGlobales";


export async function getLocalizacionUsuario() {
    return new Promise((resolve, reject)=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(mostrarPosicion, mostrarErrores)  
        } else {
            alert(`Este navegador no soporta la geolocalización. Continuar con la ciudad por defecto`)
            let coordenadasGeo = CIUDAD_DEFAULT[0].coord
            resolve({coordenadasGeo})
        }  
        
       function mostrarPosicion(posicion) {
            let lat= posicion.coords.latitude;
            let lon = posicion.coords.longitude;
            let coordenadasGeo ={lon,lat}
            resolve({coordenadasGeo})
       }
    
       function mostrarErrores(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    alert(`Permiso denegado por el usuario. Continuar usando la App con la ciudad por defecto `)
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert(`Posición no disponible. Continuar usando la App con la ciudad por defecto`)
                    break; 
                case error.TIMEOUT:
                    alert(`Tiempo de espera agotado. Continuar usando la App con la ciudad por defecto`)
                    break;
                default:
                    alert(`Error de Geolocalización desconocido.`);
                    reject()
            }
            let coordenadasGeo = CIUDAD_DEFAULT[0].coord
            resolve({coordenadasGeo})
       }


    })
    


}

