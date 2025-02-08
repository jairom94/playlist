import usuario from './1.ejercicio.js';
import calcularPromedio from './2.arreglaBug.js';
import separarPath from './3.ejercicios/1.ejercicio.js';
import convertCSV from './3.ejercicios/2.ejercicio.js';
import len_reverse from './3.ejercicios/3.ejercicio.js';
import transform from './4.transform.js';
import obtenerUsuario from './5.bugAsync.js';


console.log(usuario);

const listaNumeros = [1,2,3,4,5];
const promedioNumeros = calcularPromedio(listaNumeros);

console.log(promedioNumeros,'Promedio Lista');

console.log(separarPath('programming/languages/easy/beginner/useful/pythonstaff.py'))

console.log(convertCSV('11234'))

console.log(len_reverse('pointer'))

const {searchBySkill,getProyectos} = transform;
console.log(searchBySkill('Python'));
console.log(getProyectos());


const funAsync = async () => {
    try {
        const response = await obtenerUsuario(1);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

funAsync();

