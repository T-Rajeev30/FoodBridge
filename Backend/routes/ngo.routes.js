import { Router } from "express";

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
export default ngoRouter;
