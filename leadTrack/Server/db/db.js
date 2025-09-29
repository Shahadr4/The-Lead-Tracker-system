import mongoose  from "mongoose";


const connectToDb = async()=>{
    try{

        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB connected successfully");

    }catch(error){

        console.log(error)

    }
}

export default connectToDb