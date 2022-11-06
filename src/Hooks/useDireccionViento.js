
export default function useDireccionViento(numeroGrados=0) {
    
    if (numeroGrados > 360) {
        let vueltas=Math.trunc(numeroGrados/360)
        numeroGrados=numeroGrados-(360*vueltas)
    }
    const direccionesViento = [
        { grados: 0, direccion: 'Norte', abreviatura: 'N' },
        { grados: 22.5, direccion: 'Norte-Nordeste', abreviatura: 'NNE' },
        { grados: 45, direccion: 'Nordeste', abreviatura: 'NE' },
        { grados: 67.5, direccion: 'Este-Nordeste', abreviatura: 'ENE' },
        { grados: 90, direccion: 'Este', abreviatura: 'E' },
        { grados: 112.5, direccion: 'Este-Sudeste', abreviatura: 'ESE' },
        { grados: 135, direccion: 'Sudeste', abreviatura: 'SE' },
        { grados: 157.5, direccion: 'Sur-Sudeste', abreviatura: 'SSE' },
        { grados: 180, direccion: 'Sur', abreviatura: 'S' },
        { grados: 202.5, direccion: 'Sur-Sudoeste', abreviatura: 'SSW' },
        { grados: 225, direccion: 'Sudoeste', abreviatura: 'SW' },
        { grados: 247.5, direccion: 'Oeste-Sudoeste', abreviatura: 'WSW' },
        { grados: 270, direccion: 'Oeste', abreviatura: 'W' },
        { grados: 292.5, direccion: 'Oeste-Noroeste', abreviatura: 'WNW' },
        { grados: 315, direccion: 'Noroeste', abreviatura: 'NW' },
        { grados: 337.5, direccion: 'Norte-Noroeste', abreviatura: 'NNW' },

    ]
    
    let menor = 0
    let mayor = 0
    let cercano = 0
    let i
    for (i = 0; i < direccionesViento.length; i++) {
        if (Math.trunc(direccionesViento[i].grados) === numeroGrados) {
            menor = direccionesViento[i];
        } else if (Math.trunc(direccionesViento[i].grados) < numeroGrados) {
            menor = direccionesViento[i];
        } else if (Math.trunc(direccionesViento[i].grados) > numeroGrados) {
            mayor = direccionesViento[i];
        }
    }
    if ((mayor.grados - numeroGrados) < (numeroGrados - menor.grados )) {
        cercano = mayor;
    } else {
        cercano = menor;
    }

    const direccionVientoAproximada = cercano
    
    return {direccionVientoAproximada}

}
