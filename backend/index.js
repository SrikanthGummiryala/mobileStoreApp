import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import mobileRoute from "./routes/mobileroute.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 3000;
const URI = process.env.MongoDBURI;

//connecting to mongoDB
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error", error);
}

//defining routes
app.use("/mobile", mobileRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
