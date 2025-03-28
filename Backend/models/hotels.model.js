import mongoose from "mongoose";

const hotelsSchema = mongoose.Schema({
  hotelname: {
    type: String,
    required: true,
  },
  ownername: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  fssai: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true }); // createdAt, updatedAt

export default mongoose.model("Hotels", hotelsSchema);
