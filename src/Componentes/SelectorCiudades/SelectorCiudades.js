import React from 'react';

import './SelectorCiudades.scss'

export default function SelectorCiudades({listaSelector, handleChange}) {
    return (
        <select name="cars" id="cars" onChange={handleChange}>
            {listaSelector.map((grupo, i) => {
                return (
                    <optgroup label={grupo.tipo} key={`select-${grupo.tipo}-${i}`}>
                        {grupo.opciones.map((opcion, e) => {
                            return (
                                <option value={opcion.id} key={`option-${e}`} >{opcion.name}</option>
                            )
                        })}
                    </optgroup>
                )
            })}
        </select>
    );
}