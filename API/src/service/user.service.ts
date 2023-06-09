import {DocumentDefinition} from 'mongoose'
import {omit} from 'lodash'
import UserModel,{UserDocument} from '../models/user.models'


export async function createUser(input: DocumentDefinition<Omit<UserDocument,'createdAt'|'updatedAt'|'comparePassword'>>){
    try{
        const user = await UserModel.create(input);
        return user.toJSON();

    }catch(e: any){
        throw new Error(e)
    }
}

export async function validatePassword({email,password}:{email: string, password: string}){
    const user = await UserModel.findOne({email})

    if(!user){
        return false
    }

    const isValid = await user.comparePassword(password)

    if(!isValid){
        return false;
    }

    return user.toJSON();

}