/*Ejercicio 3.2*/
const convertCSV = (date) => {
    const date_str = String(date)
    return date_str.split('').join('-')
}

export default convertCSV;