const express =require("express");
const connect= require("./configs/db");
const hostelController= require("./controllers/hostel.controller");

const app=express()
app.use(express.json())    //for express is to read the JSON data we add here A medeleware

app.use("/create",hostelController);


//!1 -> Create a connection in between node/Express & mongoDB using MONGOOSE atlas
// const connect =()=>{          //calling back this function at the last.
//     return mongoose.connect("mongodb+srv://PrafulDeore1:Anjor143@cluster0.koi4a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");  //creating a new db and store the data on Mongodb-ATLAS(Thise url connects our pc to ATLAS)
// };



//! 2 ->Mongoose SCHEMA- it defines the structure of document,default values,validators
//!   (BLUE_PRINT)->Basically we are telling Mongoose what type of Document we are inserting
// const hostelSchema=new mongoose.Schema({
//         name:{type:String,required:true},
//         city:{type:String,required:true},
//         address:{type:String,required:true},
//         capacity:{type:Number,required:true},
//         cost:{type:Number,required:true},
//         verified:{type:String,required:true},
//         rating:{type:Number,required:true},
//         summary:{type:String,required:true},
//         watched_pets:{type:Number,required:true},
//         accepted_pet_types:{type:String,required:true},
//         accepted_pet_size:{type:String,required:true},
//         emergency_transport:{type:String,required:true},
//         walks_per_day:{type:Number,required:true},
//         potty_brecks:{type:Number,required:true},
//         img:{type:String,required:true},
//         id:{type:String,required:true}
//     },
//     {
//         versionKey:false,
//         timestamps:true,
//     })
    

//! 3->MONGOOSE MODEL->with the help of this we can perfrom CRUD operation
//!    create Collection & conecting Schema with CRUD
// let Hostel;
// try{
//      Hostel=mongoose.model("hostel",hostelSchema)
// }
// catch(e){
//     console.log(e.message)
// }
/*
work with users collection------------------------>
GET=> get/users
POST=>post/users
Get Single Item => patch/users/id:
Update Single Item => patch/users/id:
Delete Single Item =>delete/user/id:
*/
//! 3.1->POST request-(CREATE the Document) 
// app.post("/create",async (req,res)=>{
//     try{
//        const user =await Hostel.create(req.body)   //here we are tailling mongoose is create the document wich youre getting in body 
//        return res.status(201).send(user) 
//     }
//     catch(err){ 
//         return res.status(500).send(err.message);
//     }
// })


//! 3.2->GET request - (Read all the Document )
// app.get("/create",async (req,res)=>{
//     try{
//         const users=await Hostel.find().lean().exec();  //.lean() will convert Mongoose object into JSON object & .exec()will gives us a full Promise
//             return  res.send(users)
//     }
//     catch(err){
//         return res.status(500).send(err.message);
//     }

// })

//! 3.3->GET request by id - (Read only Document )
// methode + route=>get/user/${variable} and the name of variable
// app.get("/users/:id",async (req , res)=>{
//     try{
//         const user =await User.findById(req.params.id).lean().exec(); //findById will Read document By MONGO-ID & .param() =mongoid
//         return res.send(user);
//     }
//     catch(err){
//         return res.status(500).send(err.message);
//     }
// })

//! 3.4->PATCH request - (Update only 1 Document )
// methode + route=>patch/user/${variable} and the name of variable
// app.patch("/users/:id",async (req , res)=>{
//     try{
//         const user =await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec(); //findById will Read document By MONGO-ID & .param() =mongoid
//                   //update takes 2 Arguments(^^^1.which document we have to update,2.what thing in this document we have to we have to update)
//         return res.status(201).send(user)

//     }
//     catch(err){ 
//         return res.status(500).send(err.message);
//     }
// })




//!  starting the express server------>


const  PORT=process.env.PORT || 5000;
app.listen(PORT, async function(){   
    try{
        await connect()               //we use await here because "mongoose.connect" will returns PROMISE 
        console.log(`Connection Is Succesfull...${PORT}`);
    }
    catch(err){
        console.log("Not Connected to server!",err)
    }
        
})