/* Ejercicio 4 */
const datos = [
    {
        id:1,
        nombre:'Juan',
        habilidades: ['JavaScript','HTML','CSS'],
        proyectos: [
            {id:1,nombre:'Proyecto 1'},
            {id:2,nombre:'Proyecto 2'}
        ]
    },
    {
        id:2,
        nombre:'Maria',
        habilidades: ['Python','SQL','Django'],
        proyectos: [
            {id:3,nombre:'Proyecto 3'},
            {id:4,nombre:'Proyecto 4'}
        ]
    },
    {
        id:3,
        nombre:'Pedro',
        habilidades: ['Java','Spring','Hibernato'],
        proyectos: [
            {id:5,nombre:'Proyecto 5'},
            {id:6,nombre:'Proyecto 6'}
        ]
    },
    {
        id:4,
        nombre:'Lucas',
        habilidades: ['Java','Spring','Hibernato'],
        proyectos: [
            {id:5,nombre:'Proyecto 7'},
            {id:6,nombre:'Proyecto 8'},
            {id:7,nombre:'Proyecto 9'}
        ]
    }
]

const searchBySkill = (skill='') => {
    const developers = datos
    .filter((dev)=>dev.habilidades.includes(skill))
    .map((dev)=>({...dev}));
    return JSON.stringify(developers,null,2);
}

const getProyectos = () => {
    const proyectsList = datos.map((dev)=>{
        const proyectos = dev.proyectos.map(({nombre})=>{
            return nombre
        })
        return [...proyectos]
    }).flat();
    return proyectsList
}

export default {
    searchBySkill,
    getProyectos
};