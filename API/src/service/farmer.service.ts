import FarmerModel, { FarmerDocument } from "../models/farmer.models";
import {DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery}  from "mongoose"

    
    export async function createFarmer(input: DocumentDefinition<Omit<FarmerDocument, 'createdAt'| 'updatedAt'>>){
        return FarmerModel.create(input)



    }

    export async function findFarmer(query: FilterQuery<FarmerDocument>, options: QueryOptions= {lean:true}){
        return FarmerModel.findOne (query, {}, options);
    }

    export async function findAndUpdateFarmer(query: FilterQuery<FarmerDocument>,update: UpdateQuery<FarmerDocument>,options:QueryOptions){
        return FarmerModel.findOneAndUpdate(query,update,options)
        
    }

    export async function deleteFarmer(query: FilterQuery<FarmerDocument>){
        return FarmerModel.deleteOne(query);
        
    }