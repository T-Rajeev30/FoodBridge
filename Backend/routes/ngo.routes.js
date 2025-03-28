import { Router } from "express";
import { createNGOuser, getNGOuser, deleteNGOuser, updateNGOuser } from "../Controller/ngo.controller.js";

const ngoRouter = Router();

ngoRouter.post("/sign-up", (req, res) =>
  res.send({ title: "Sign UP for ngo registration" })
);

ngoRouter.post("/sign-in", (req, res) =>
  res.send({ title: "Sign in  for the ngo sign in  " })
);
ngoRouter.post("/sign-out", (req, res) =>
  res.send({ title: "Sign out  for the ngo  " })
);

ngoRouter.post("/", createNGOuser);
ngoRouter.get("/", getNGOuser);
ngoRouter.put("/:id", updateNGOuser);
ngoRouter.delete("/:id", deleteNGOuser);

export default ngoRouter;
