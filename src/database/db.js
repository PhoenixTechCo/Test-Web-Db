import mongoose from "mongoose"
import { DB_NAME } from "../constant.js";

const connectDB = async ()=> {
    try {

        const conInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MONGODB CONNECTED AT : ${conInstance.connection.host} `);
        
    } catch (error) {

        console.log("MONGODB CONNECTION ERROR : ", error);
        process.exit(1);
    }
}


export default connectDB;