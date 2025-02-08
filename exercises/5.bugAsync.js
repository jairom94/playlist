const obtenerUsuario=(id)=>{
    let usuario;    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(id === 1){
                usuario = {
                    id:1,
                    nombre:'Jhon Doe'
                }
                resolve(usuario)
            }else{
                reject(new Error('User not found.'))
            }

            
        },3000);
    });
}

export default obtenerUsuario;