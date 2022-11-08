import React from 'react';
import { render } from '@testing-library/react';
import PronosticoExtendido from '../Componentes/PronosticoExtendido/PronosticoExtendido';
import '@testing-library/jest-dom/extend-expect'

test('Testeo que el componente PronosticoExtendido se este renderizando correctamente', () => {

    const listDaysExtendedForecast = [
        {   monthName: 'NOVIEMBRE',
            dayName: 'MIÉ',
            dayNumber: 9,
            temperatureMin: 15,
            temperatureMax: 30,
            selectedDescription: 'NUBES',
            selectedIcon: '04d'
        },
        {   monthName: 'NOVIEMBRE',
            dayName: 'JUE',
            dayNumber: 10,
            temperatureMin: 17,
            temperatureMax: 30,
            selectedDescription: 'MUY NUBOSO',
            selectedIcon: '04d'
        },
        {   monthName: 'NOVIEMBRE',
            dayName: 'VIE',
            dayNumber: 11,
            temperatureMin: 14,
            temperatureMax: 31,
            selectedDescription: 'LLUVIA LIGERA',
            selectedIcon: '10d'
        },
        {   monthName: 'NOVIEMBRE',
            dayName: 'SÁB',
            dayNumber: 12,
            temperatureMin: 13,
            temperatureMax: 25,
            selectedDescription: 'NUBES',
            selectedIcon: '04d'
        },
        {   monthName: 'NOVIEMBRE',
            dayName: 'DOM',
            dayNumber: 13,
            temperatureMin: 14,
            temperatureMax: 14,
            selectedDescription: 'LLUVIA MODERADA',
            selectedIcon: '10d'
        }
    ];

    const componente = render(<PronosticoExtendido listaDiasPronosticoExtendido={listDaysExtendedForecast} />);
    componente.getByText('Pronostico extendido')
    expect(componente.container).toHaveTextContent('Min: 14°C')
    expect(componente.container).toHaveTextContent('Max: 31')
    expect(componente.container).toHaveTextContent('NOVIEMBRE')
    expect(componente.container).toHaveTextContent('SÁB')
    expect(componente.container).toHaveTextContent('13')
    expect(componente.container).toHaveTextContent('NUBES')
    
    console.log(componente.container)

});
