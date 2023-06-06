import mongoose from 'mongoose'
import {UserDocument} from './user.models'
import { customAlphabet } from 'nanoid'

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789',10);


export interface FarmerDocument extends mongoose.Document{
    user: UserDocument["_id"];
    fullname: string;
    age:string;
    district: string;
    createdAt: Date;
    updatedAt: Date;
}


const farmerSchema = new mongoose.Schema({
    farmerId: {
        type: String,
        required: true,
        unique: true,
        default: () => `farmer_${nanoid()}`

    },
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    fullname: {
        type:String,
        required: true
    },
    age: {
        type: Number,
        required: true

    },
    district: {
        type: String,
        required: true
    }


},{
timestamps: true,
}
);

const FarmerModel = mongoose.model<FarmerDocument>("Farmer",farmerSchema)
export default FarmerModel;