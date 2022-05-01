const mongoose =require("mongoose")


// 1 -> Create a connection in between node/Express & mongoDB using MONGOOSE atlas

const connect =()=>{          //calling back this function at the last.
    return mongoose.connect("mongodb+srv://PrafulDeore1:Anjor143@cluster0.koi4a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");  //creating a new db and store the data on Mongodb-ATLAS(Thise url connects our pc to ATLAS)
};
module.exports=connect

