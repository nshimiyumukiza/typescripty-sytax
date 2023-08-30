import express from 'express'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import mongoose from 'mongoose';

import router from './routes/index';

// import userRoutes from './userRoutes'

dotenv.config()
const app=express();
app.use(bodyParser.json())
app.use('/api/v1',router)
const port=process.env.port
const database=process.env.db_name


//configure server
const startserver=()=>{
    app.listen(port)
}

//configure database
const connect=()=>{
    mongoose.connect(database,{})
}
Promise.all([startserver(),connect()]).then(()=>{
    console.log(`port running on... ${port}`)
    console.log(`database successful connected`)
})
.catch((error)=>{
    console.log(error)
})
export default app;