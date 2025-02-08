/*Ejercicio 2*/
const calcularPromedio = (numeros) => {
    let sumaTotal = 0;
    for(let i = 0;i<numeros.length;i++){
        sumaTotal += numeros[i];
    }
    const promedio = sumaTotal/numeros.length;
    return promedio;
}

export default calcularPromedio;