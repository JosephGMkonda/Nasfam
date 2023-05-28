import {Request,Response} from 'express'
import { ReadFarmerInput, createFarmerInput, deleteFarmerInput, updateFarmerInput } from '../Schema/farmer.schema';
import { createFarmer } from '../service/farmer.service';
import { findFarmer } from '../service/farmer.service';
import { findAndUpdateFarmer } from '../service/farmer.service';
import { deleteFarmer } from '../service/farmer.service';


export async function createFarmerHandler(req: Request<{},{},createFarmerInput['body']>, res: Response){
   

    const userId = res.locals.user._id;
    const body = req.body

    const Farmer = await createFarmer({...body, user: userId})
    return res.send(Farmer)


}


export async function updateFarmerHandler(req: Request<updateFarmerInput['params']>, res: Response){
    const userId = res.locals.user._id;
    const FarmerId = req.params.farmerId;
    const update = req.body;
    

    const Farmer = await findFarmer({FarmerId});

    if(!Farmer){
        return res.sendStatus(404)

    }

    if(Farmer.user !== userId){
        return res.sendStatus(403)
    }

    const updateProduct = await findAndUpdateFarmer({FarmerId},update, {new: true})

    return res.send(updateProduct)


}


export async function getFarmerHandler(req: Request<ReadFarmerInput['params']>, res: Response){
    
    const FarmerId = req.params.farmerId;
    const Farmer = await findFarmer({FarmerId})

    if (!Farmer){
        return res.sendStatus(404)
    }

    return res.send(Farmer)


}


export async function deleteFarmerHandler(req: Request<deleteFarmerInput['params']>, res: Response){

    const userId = res.locals.user._id;
    const FarmerId = req.params.farmerId;
    
    

    const Farmer = await findFarmer({FarmerId});

    if(!Farmer){
        return res.sendStatus(404)

    }

    if(Farmer.user !== userId){
        return res.sendStatus(403)
    }

    await deleteFarmer({FarmerId})

    return res.send(200);



}