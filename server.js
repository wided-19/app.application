const express =require('express')
const connectDB = require('./config/connectDB')
const authRouter = require('./Routes/Auth')
const produitRouter = require("./Routes/Productcd")

const app = express()
connectDB()
//middleware
app.use(express.json())
//use Routes
app.use('/api/auths',authRouter);
app.use('/api/auths', produitRouter);

const PORT= process.env.PORT || 4000;

app.listen(PORT, (err)=>{
err?
console.log(err)
:
console.log(`Server  is running on port ${PORT}....`)
})