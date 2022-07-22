const mongoose= require("mongoose")
module.exports=()=>{
    return mongoose.connect("mongodb+srv://gourab:gourab111@cluster0.ueyki.mongodb.net/?retryWrites=true&w=majority")
}