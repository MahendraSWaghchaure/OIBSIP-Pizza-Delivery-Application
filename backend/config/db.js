import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://ronny14779:Ronny1234@projectx.d7c6m.mongodb.net/ProjectX').then(()=>{
       console.log('DB connected') ;
    })
}

//
//mongodb+srv://dulanjalisenarathna93:E2JUb0zfaT2FVp8D@cluster0.exkxkun.mongodb.net/reactjs-food-delivery-app
//mongodb+srv://ronny14779:Ronny@1234@projectx.d7c6m.mongodb.net/?retryWrites=true&w=majority&appName=ProjectX
