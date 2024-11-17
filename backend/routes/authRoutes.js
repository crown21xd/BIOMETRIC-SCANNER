import express from "express";
import { register, signin, signout } from "../controllers/authControllers.js";
import { db } from "../database.js";

const router = express.Router();

router.post("/register", register);
router.post("/signin", signin);
router.post("/signout", signout);

router.get("/users", (req, res) => {
  const users = db.getUsers();
  console.log("All users:", users);
  res.json(users);
});

export default router;
