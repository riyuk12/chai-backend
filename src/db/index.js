import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        console.log(`${process.env.MONGO_URI}/${DB_NAME}`)
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`\n DB connected \n ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`DB error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
