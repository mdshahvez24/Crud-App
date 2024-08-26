const mongoose = require ("mongoose")

// mongoose.connect("mongodb://localhost:27017/Crud-app")
mongoose.connect(process.env.DB)



.then(()=>{
    console.log('DataBase is connected')
})
.catch(()=>{
    console.log("something went wrong in connecting database")
})