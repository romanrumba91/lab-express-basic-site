const express =  require("express")
const app = express()

// Middlewares
//activar variable entornos, si estas en local vale una cosa y entorno en otroa
require("dotenv").config()
//Activa la carpeta publica del proyecto
app.use(express.static("public"))
//Establecer vistas
//Local: __dirname vale http:...
//Remoto: __dirname vale https:...
//decir donde esta la carpeta de vistas 
app.set("views", __dirname + "/views")

//indicar que motor de template vamos a usar
//handlebards -- es un motor que permite manejar logica dentro de archivos html
app.set("view engine" , "hbs")

//Rutasds

app.use("/", require("./routes/index"))

//Servidores

app.listen(process.env.PORT, () => {

    console.log("Servidor activo")
})