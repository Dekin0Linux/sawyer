const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require("cors")

// ROUTES
const userRoutes = require('./routes/userRoute')
const accountRoutes = require('./routes/accountRoute')
const transactionRoutes = require('./routes/transactionRoute')
const cardRoutes = require('./routes/cardRoute')
const notificationRoutes = require("./routes/notificationRoute")


const app = express()
dotenv.config()
const customHeaders = {
    'Custom-Header-1': 'Value1',
    'Custom-Header-2': 'Value2',
  };

// MIDDLEWARES
app.use(express.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin (you can specify specific origins instead of '*')
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT,PATCH, DELETE, OPTIONS"); // Allow the specified HTTP methods
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    ); // Allow the specified headers
    next();  
});
// app.use(cors({
//     origin: ['*','https://sawyerbank.onrender.com/','http://localhost:5173/'],
//     credentials : true,
//     methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS', // Allow the specified HTTP methods
//     allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization', // Allow the specified headers
// }))


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use('/user',userRoutes)
app.use('/account',accountRoutes)
app.use('/transaction',transactionRoutes)
app.use('/card',cardRoutes)
app.use('/notification',notificationRoutes)

app.listen(process.env.PORT, ()=>{
    console.log('Server connected')
})