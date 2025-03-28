import { Router } from "express";

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
export default hotelRouter;
