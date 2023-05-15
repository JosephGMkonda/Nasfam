import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import config from 'config';
import {UserDocument} from './user.models'

export interface SchemaDocument extends mongoose.Document{
    user:UserDocument["_id"] ;
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
    

}



//user Schema this defines schema for the session to be used in the session model

const sessionSchema = new mongoose.Schema({

    user:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    valid:{type:Boolean, default:true},
    userAgent: {type: String}
    

},{
    timestamps: true,
})




//model for the session Schema

const SessionModel = mongoose.model("Session",sessionSchema)

export default SessionModel;