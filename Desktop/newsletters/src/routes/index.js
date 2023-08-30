import  Express from "express";
import userRoutes from './userRoutes'

const router=Express.Router();
router.use("/user",userRoutes)

export default router