const express=require("express")
const userRouterers = require("./routes/person")
const userRoute = require("./routes/user")
const connections= require("./storage/db")
const app=express()
const cors= require("cors")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use("/user", userRoute)
app.use("/profile",userRouterers)

app.get("/", function(req, res){
    return res.send("hello welcome")
})

const port = process.env.PORT || 8080


app.listen(port,async ()=>{
  
   console.log("server started")
   await connections()
})