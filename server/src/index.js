const express=require("express")
const connect=require("./config/db")

const resident=require("./controller/resident.Contoller")
const flat=require("./controller/flatController")
 
const app=express()

app.use(express.json())

// app.get("/resident",resident)
// app.post("/resident",resident)

app.use("/resident",resident)
app.use("/flat",flat)


app.listen(3245,async()=>{
try {
    await connect()
    console.log("3245 port is running")
} catch (error) {
    console.log(error.message)
}
})