//define connection between node and mongodb using mangoose

//import moongoose
const mongoose = require('mongoose')

//get coonection string from env
const DB = process.env.DATABASE

//connect monogodb
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("cart Database connected Succrssfully!!!");
}).catch((error)=>{
    console.log(error);
})
