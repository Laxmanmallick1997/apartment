const mongoose=require("mongoose")


function connect() {
    return mongoose.connect("mongodb+srv://laxman:laxman_1234@cluster0.uagtf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}
module.exports=connect