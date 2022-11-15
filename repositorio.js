function buscarUsusarioPorCorreo(correo)
{
    //solamente para comporobar que llegue la informacion
    console.log("Correo: ", correo)

    //lo que hace el find es como un while con un if, pasa por todos los correos y compara si son iguales
    return this.usuarios.find((usuario) => usuario.correo==correo)
}

function validarUsuario(correo, password)
{
    let usuario = this.buscarUsusarioPorCorreo(correo)
    //este if es por si no coincide, si no encuentra nada regresa un null (el ususario no escribio contraseña)
    if(usuario==null)
    {
        return null
    }
    //si ingreso una contraseña la va a comparar si coincide
    if(usuario.password==password)
    {
        return usuario
    }
    null
}

function registrarUsuario(email,contra)
{
   this.usuarios.push({correo:email,password:contra})
}

function crearRepoUsuarios()
{
    //aqui se definen los susarios
    let usuarios=[
        //este es el primer ususario dentro de nuestro repositorio, necedito otros dos
        {correo:"shrek@gmail.com", password:"11111"}
    ]
    return {usuarios, buscarUsusarioPorCorreo, validarUsuario, registrarUsuario}
    
}

module.exports=crearRepoUsuarios