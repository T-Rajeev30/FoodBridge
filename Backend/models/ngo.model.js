import mongoose from "mongoose";

const ngoSchema = mongoose.Schema(
  {
    name: {
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
    ngoregistrationnumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // createdAt, updatedAt

const NGO = mongoose.model("NGO", ngoSchema);
export default NGO;
