import mongoose,{model,Schema,Document, Model} from "mongoose";
 interface IStudent extends Document {
    firstName : string;
    lastName : string;
    email : string;
    password : string
}
 const studentSchema = new Schema<IStudent>({
    firstName :{
        type: String,
        required : true
    },
    lastName: {
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    }


 },{timestamps: true})

  const Student : Model<IStudent> = mongoose.model<IStudent>("Student",studentSchema)

  export default Student