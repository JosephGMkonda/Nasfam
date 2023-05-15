import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import config from 'config';

export interface UserDocument extends mongoose.Document{
    email: string;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<Boolean>

}



//user Schema this defines schema for the user to be used in the user model

const userSchema = new mongoose.Schema({

    email:{type:String, required:true,unique:true},
    username:{type:String, required:true},
    password:{type:String , required:true}

},{
    timestamps: true,
})

//pre save function for hatched password which is recommended in database
//hashing password algo

userSchema.pre("save", async function(next){
    let user = this as UserDocument;


    if(!user.isModified("password")){
        return next();
    }

    const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));
    const hash = await bcrypt.hashSync(user.password, salt)
    user.password = hash;
    return next();
});

userSchema.methods.comparePassword = async function (candidatePassword: string) {
    const user = this as UserDocument

    return bcrypt.compare(candidatePassword, user.password).catch((e) => false)
    
}
//model for the user Schema

const UserModel = mongoose.model<UserDocument>("User",userSchema)

export default UserModel;