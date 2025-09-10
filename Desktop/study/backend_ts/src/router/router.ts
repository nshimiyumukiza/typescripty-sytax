import express,{Router} from "express"
import { StudentController } from "../controller/student.controller"


const router:Router = express.Router()
  router.post("/",StudentController.createStudent)
export default router