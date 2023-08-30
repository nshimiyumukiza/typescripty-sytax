import express from "express";

import usercontroller from "../controller/userController";

const router=express.Router()

router.post("/",usercontroller.createUser)
router.get("/",usercontroller.getAllUsers)
router.delete("/",usercontroller.deleteAllUsers)
router.get('/:ido',usercontroller.getOneUser)
export default router