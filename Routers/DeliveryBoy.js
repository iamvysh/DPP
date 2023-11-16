const express=require("express")
const router=express.Router()
const delivery=require("../Controllers/DeliveryController")


// router.post("/addmovies",delivery.addMovie)
router.post("/login",delivery.login)
router.post("/addmovie",delivery.addMoviesToUser)
router.get("/details",delivery.findAllusers)
router.delete("/delete/:id/:movie",delivery.Deletemovie)










module.exports=router