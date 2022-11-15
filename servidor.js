const express=require("express")
const mustacheExpress=require("mustache-express")
const app=express() 
const repoUsuarios=require("./repositorio")()
app.use(express.static('www'))
app.use(express.urlencoded({extended:false}))
app.engine('mustache',mustacheExpress())  //Define las vistas de mustache
app.set('view engine','mustache')
app.set('views',__dirname + '/vistas')


app.get("/iniciarSesion",(request,response)=>{
    response.render("iniciarSesion")
})
app.post("/new",(request,response)=>{
    response.render("nuevoUsuario")
})
app.post("/registrar",(request,response)=>{
    repoUsuarios.registrarUsuario(request.body.correo,request.body.password)
})

app.post("/login",(request,response)=>{
    console.log("Validando informacion "+request.body.correo+":"+request.body.password)
    let usuario=repoUsuarios.validarUsuario(request.body.correo,request.body.password)
    if(usuario==null)
    {
        response.status(404).render("iniciarSesion",{correo:request.body.correo})
        return
    }

    let parametroMustache={...usuario,tienePasatiempos:usuario.pasatiempos!=null}
    response.status(200).render("main",parametroMustache)
})
app.post("/principal",(request,response)=>{
    response.render("plantilla")
})
app.post("/regreso",(request,response)=>{
    response.render("main")
})

app.listen(8080,()=>console.log("Activando servidor..."))
