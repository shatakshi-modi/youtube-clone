import { app } from "./app.js";
import connectDb from "./db/index.js";
import dotenv from "dotenv";
dotenv.config();

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
