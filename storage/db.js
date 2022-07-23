const mongoose= require("mongoose")
module.exports=()=>{
    return mongoose.connect("mongodb+srv://gourab:gourab@cluster0.2cmje.mongodb.net/?retryWrites=true&w=majority")
}