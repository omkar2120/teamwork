const express=require("express")
const app=express()
const port=process.env.PORT||6000
require("./database/connect")


const User = require("./teamwork/backend/models/user");

const userroutes = require("./teamwork/backend/routes/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/api",userroutes);

app.get("/request",(req,re)=>{
    res.send("hello")
})
app.listen(port,()=>{
    console.log("app is running on port "+port)
})