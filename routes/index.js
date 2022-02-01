// 1. IMPORTACIONES
const express 		= require("express")
const router		= express.Router()


// 2. RUTEO
router.get("/", (req, res) => {
    res.render("index"); 
})

router.get("/about", (req, res) => {
    res.render("about"); 
})

router.get("/works", (req, res) => {
    res.render("works"); 
})



// 3. EXPORTACIÓN
module.exports = router