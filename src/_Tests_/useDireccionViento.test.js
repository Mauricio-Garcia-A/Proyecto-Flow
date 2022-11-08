import {describe, expect, test} from '@jest/globals';
import useDireccionViento from '../Hooks/useDireccionViento';

describe('Testea trasformacion de GRADOS (0-360)° a DIRECCION (Este,Oeste,Norte,Sur), por Aproxiomacion', () => {
  test('0° = Norte', () => {
    const {direccionViento }=useDireccionViento(0)
    expect(direccionViento).toBe('N');
  });
  test('360° = Norte', () => {                          // 360 es igual a 0, implica que dio una vuelta completa al circulo.
     const {direccionViento }=useDireccionViento(360)
     expect(direccionViento).toBe('N');
  });
  test('369° = Norte', () => {                          // 369 es igual a 9. por lo tanto N (La API NO DEVUELVE VALORES MAYORESS A 360)
     const {direccionViento }=useDireccionViento(369)
     expect(direccionViento).toBe('N');
  });
  test('180° = Sur', () => {
     const {direccionViento }=useDireccionViento(180)
     expect(direccionViento).toBe('S');
  });
  test('90° = Este', () => {
     const {direccionViento }=useDireccionViento(90)
     expect(direccionViento).toBe('E');
  });
  test('270° = Oeste', () => {
     const {direccionViento }=useDireccionViento(270)
     expect(direccionViento).toBe('W');
  });
  test('45° = Nordeste', () => {
     const {direccionViento }=useDireccionViento(45)
     expect(direccionViento).toBe('NE');
  });
  test('22.5° = Norte-Nordeste', () => {                   // Cada 22.5 grados hay una Direccion Asignada
     const {direccionViento }=useDireccionViento(22.5)
     expect(direccionViento).toBe('NNE');
  });
  test('11° = Norte', () => {
     const {direccionViento }=useDireccionViento(11)
     expect(direccionViento).toBe('N');
  });
  test('11.25° = Norte-Nordeste', () => {                   // en los 11.25 hay un punto de inflexion (esta igual distacia de 0=N, que del 22.5=NNE) por convecion se lo asignamos al Norte
    const {direccionViento }=useDireccionViento(11.26)
    expect(direccionViento).toBe('NNE');
 });
  test('11.24° = Norte', () => {                            // en el grado 11.24 ya esta mas proximo al Norte-Nordeste, que al Norte
     const {direccionViento }=useDireccionViento(11.24)
     expect(direccionViento).toBe('N');                  
  });

  test('348.75° = Norte-Noroeste', () => {
     const {direccionViento }=useDireccionViento(348.75)
     expect(direccionViento).toBe('NNW');
  });
  test('349° = Norte', () => {
     const {direccionViento }=useDireccionViento(349)
     expect(direccionViento).toBe('N');
  });
});