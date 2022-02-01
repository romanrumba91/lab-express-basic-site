// 1. IMPORTACIONES
const express 		= require("express")
const router		= express.Router()



// 2. RUTEO
router.get("/home", (req, res) => {
	res.send("Hola mundo")
})

router.get("/about", (req, res) => {
	res.send("About")
})

router.get("/works", (req, res) => {
	res.send("Works")
})


// 3. EXPORTACIÓN
module.exports = router