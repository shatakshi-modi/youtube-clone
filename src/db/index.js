import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
  console.log(process.env.MONGODB_URI);
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("DB Error: ", error);
    process.exit(1);
  }
};

export default connectDb;
