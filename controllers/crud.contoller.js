const express =require("express");
const router = express.Router();
const {model}= require("mongoose")
// POST--------------------------------------------------------->
const post =(model)=>async(req,res)=>{
    try{
      const  item =await model.create(req.body);
      return res.send(item)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
}
// GET all--------------------------------------------------------->
const getAll =(model)=>async(req,res)=>{
    try{
      const  item =await model.find().lean().exec();
      return res.send(item)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
}

// app.get("/create",async (req,res)=>{
//     try{
//         const users=await Hostel.find().lean().exec();  //.lean() will convert Mongoose object into JSON object & .exec()will gives us a full Promise
//             return  res.send(users)
//     }
//     catch(err){
//         return res.status(500).send(err.message);
//     }

// })

// GET One--------------------------------------------------------->
// router.get("/:id", crudController(Evaluation).getOne);
// const getOne =(model)=>async(req,res)=>{
//     try{
//       const  item =await model.findById(req.params.id).lean().exec();
//       return res.send(item)
//     }
//     catch(err){
//         return res.status(500).send(err.message)
//     }
// }


module.exports=(model)=>({
    post:post(model),
    get:getAll(model),
    // getOne:getOne(model)
})