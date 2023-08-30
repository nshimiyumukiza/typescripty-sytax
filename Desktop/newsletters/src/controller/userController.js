import User from "../model/User";
import bcrypt,{hash} from "bcrypt"

import errorResponse from "../utils/errorResponse";
import successResponse from "../utils/successResponse"

class usercontroller {
  static async createUser(req, res) {

const {firstname,lastname,email,password}=req.body
    try {
      if (req.body.password !== req.body.confirmPassword) {
        return errorResponse(res,403,"password and confirm password is not matched")
        };
  
        const hashpassword=bcrypt.hashSync(req.body.password,10)
          const user =await User.create({firstname,lastname,email,password:hashpassword})
const status=201
const msg=`user successful create`
const data =user
return successResponse(res,status,msg,data);
      }catch (error) {
      if (error.code == 11000) {
        return errorResponse(res,403, `user alread exist`)
      } 
      else {
        return errorResponse(res,500,error)
      }
    }
  }


  static async getAllUsers(req, res) {
    const hell = await User.find();
    if (!hell || hell.length == 0) {
      return errorResponse(res,401,'no user faund')
    
      }
     else if (hell) {
      const status=200
      const msg=`all ${hell.length} user found`
      const data=hell
      return successResponse(res,status,msg,data)
      
    }
  }

  static async deleteAllUsers(res,req){
      const vav=await User.deleteMany()
          return successResponse(res,200,`all user deleted`,vav)

  }
static async getOneUser(req,res){
  const id=req.params.ido
  const user=await User.findById(id)
  if(!user){
    return errorResponse(res,401,`no user foun with that id:${id}`)
  }

else{
  return successResponse(res,200,`user successfuly retrieved`,user)
}

}

}
export default usercontroller;
