import {LISTA_CIUDADES} from '../Helpers/ListaCiudades'

export default function useListaCiudadesSelector({ciudades=[],corrdenadasGEO}) {

    var listaUbicacionCiudades=[]
    
    LISTA_CIUDADES.forEach(LC=>{
        ciudades.forEach(c =>{
            if (LC.name===c){
                listaUbicacionCiudades.push(LC)
            }
        })
    }) 
    
    return {listaUbicacionCiudades};
}
