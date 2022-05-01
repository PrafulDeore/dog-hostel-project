const express =require("express");

const Hostel =require("../Models/hostel.model");

const crudController =require("./crud.contoller");

const router = express.Router();


router.post("/", crudController(Hostel).post);

router.get("/", crudController(Hostel).get);
// router.get("/:id", crudController(Hostel).getOne);


 module.exports=router;
