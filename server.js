import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectdb } from './config/db.js'
import userRouter from './routes/userRoute.js'
import taskRouter from './routes/taskroute.js'
const app=express();
const port=process.env.port ||4000;
//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//db connection
connectdb();
//routes
app.use("/api/user",userRouter);
app.use("/api/tasks",taskRouter);
app.get('/',(req,res)=>{
    res.send('api working');
})
app.listen(port,()=>{
    console.log(`Server started on ${port}`);
})




