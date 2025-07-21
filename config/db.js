import mongoose from 'mongoose'
export const connectdb=async()=>{
    await mongoose.connect('mongodb+srv://piyushdokania047:Piyush@1410cluster0.zakxqu8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'/taskflow)
     .then(()=>console.log('db connected'));
}