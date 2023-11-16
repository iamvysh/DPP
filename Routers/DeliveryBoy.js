const express=require("express")
const router=express.Router()
const delivery=require("../Controllers/DeliveryController")


// router.post("/addmovies",delivery.addMovie)
router.post("/login",delivery.login)
router.post("/addmovie",delivery.addMoviesToUser)
router.get("/details",delivery.findAllusers)










module.exports=router