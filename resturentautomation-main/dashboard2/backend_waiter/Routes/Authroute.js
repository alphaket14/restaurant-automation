import express from "express";
import {
  deleteUser,
  getuserbyid,
  Loginuser,
  registerUser,
  updateUser,
} from "../controller/Authcontroller.js";

const router = express.Router();

// route to register

router.post("/register", registerUser);

// route to login

router.post("/login", Loginuser);

router.put("/:id", updateUser);
router.get("/waiter/:id", getuserbyid);

router.delete("/:id", deleteUser);

export default router;
