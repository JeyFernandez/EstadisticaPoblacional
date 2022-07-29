import { Poblacion } from "./data";
import { registroPoblacional } from "./data";

function mayorPoblacion() {
    const array: number[] = registroPoblacional.map((value: Poblacion) => value[2022]);
    const maximo: number = Math.max(...array);
    const result: Poblacion[] = registroPoblacional.filter((value: Poblacion) => value[2022] === maximo);
    return result;
}

function menorPoblacion() {
    const array: number[] = registroPoblacional.map((value: Poblacion) => value[2022]);
    const minimo: number = Math.min(...array);
    const result: Poblacion[] = registroPoblacional.filter((value: Poblacion) => value[2022] === minimo);
    return result;
}

function poblacioOrdenada() {
    const array: string[] = registroPoblacional.map((value: Poblacion) => value.name);
    const result = array.sort();
    return result;
}

function poblacionMayoraMenor() {
    const result = registroPoblacional.sort((a, b) => b[2022] - a[2022]);
    return result;
}

console.log("-----REGISTRO POBLACIONAL-----")
console.log("Ciudades con mayor poblacion:", mayorPoblacion());
console.log("Ciudaddes con menor poblacion:", menorPoblacion());
console.log("Ciudades ordenadas alfabeticamente son:", poblacioOrdenada());
console.log("Ciudades ordenadas de mayor a menor:", poblacionMayoraMenor());