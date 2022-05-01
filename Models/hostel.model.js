const mongoose= require("mongoose")
// 2 ->Mongoose SCHEMA- it defines the structure of document,default values,validators
//   (BLUE_PRINT)->Basically we are telling Mongoose what type of Document we are inserting
const hostelSchema=new mongoose.Schema({
    name:{type:String,required:true},
    city:{type:String,required:true},
    address:{type:String,required:true},
    capacity:{type:Number,required:true},
    cost:{type:Number,required:true},
    verified:{type:String,required:true},
    rating:{type:Number,required:true},
    summary:{type:String,required:true},
    watched_pets:{type:Number,required:true},
    accepted_pet_types:{type:String,required:true},
    accepted_pet_size:{type:String,required:true},
    emergency_transport:{type:String,required:true},
    walks_per_day:{type:Number,required:true},
    potty_brecks:{type:Number,required:true},
    img:{type:String,required:true},
    id:{type:String,required:true}
},
{
    versionKey:false,
    timestamps:true,
})


// 3->MONGOOSE MODEL->with the help of this we can perfrom CRUD operation
//    create Collection & conecting Schema with CRUD
const Hostel=mongoose.model("hostel",hostelSchema);   //!creating collection in database
module.exports=Hostel;