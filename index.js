const express = require('express');
const app = express();
const userRoutes = require('./app/routes/userRoutes')
const {connectMongoDb} = require('./app/config/dbConnection')

//Connection 
connectMongoDb('mongodb://127.0.0.1:27017/test_data')
.then(() => console.log('Mongo db connected'))
.catch((err) => console.log('ERROR', err))

//Middlewares to parse json
app.use(express.json())

app.use(userRoutes)

app.listen(8001, () => {
    console.log('Server is running on port 8001')
})