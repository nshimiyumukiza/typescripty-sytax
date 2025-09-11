import { Request,Response } from "express";
import Student from "../modal/student.modal";
class StudentController{
   static async createStudent(req:Request,res:Response):Promise<void>{
       try {
        const {firstName,lastName,email,password} = req.body;
        const student = await Student.create(req.body)
        res.status(201).json({message:"student created succefully!",student}) 
        
    } catch (error:any) {
        res.status(500).json({error: error.message})
    }
}

   }

export {StudentController}