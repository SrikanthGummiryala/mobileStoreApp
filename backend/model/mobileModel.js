import mongoose from "mongoose";

const mobileSchema = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  title: String,
});

const Mobile = mongoose.model("Mobile", mobileSchema);

export default Mobile;