import { Router } from "express";
import { createHoteluser, getHoteluser, deleteHoteluser, updateHoteluser } from "../Controller/hotels.controller.js";

const hotelRouter = Router();

hotelRouter.post("/sign-up", (req, res) =>
  res.send({ title: "Sign UP for hotel registration" })
);

hotelRouter.post("/sign-in", (req, res) =>
  res.send({ title: "Sign in  for the hotel sign in  " })
);
hotelRouter.post("/sign-out", (req, res) =>
  res.send({ title: "Sign out  for the gotels  " })
);

hotelRouter.post("/", createHoteluser);
hotelRouter.get("/", getHoteluser);
hotelRouter.put("/:id", updateHoteluser);
hotelRouter.delete("/:id", deleteHoteluser);

export default hotelRouter;
