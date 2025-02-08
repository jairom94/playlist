/*Ejercicio 1*/
const usuario = {
    name:'Jairo',
    last_name:'Moreno',
    courses:[
        {
            name:'Node.js',
            start_date:'2025-03-10',            
        },
        {
            name:'Git',
            start_date:'2025-02-02',            
        },
        {
            name:'React',
            start_date:'2025-05-12',            
        },       
    ],
    active_search:true
}

const miFuncion = () => {
    console.log("Hola desde miModulo!");
};

export default usuario;