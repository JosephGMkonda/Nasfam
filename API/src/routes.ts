import {Express,Request,Response} from 'express'
import { createUserHandler } from './controller/user,controller';
import validationResource from './middleware/validationResource'
import {createUserSchema} from './Schema/user.schema' 
import { createUserSessionHandler } from './controller/session.controller';
import { createSessionSchema } from './Schema/session.schema';
import { getUserSessionsHandler } from './controller/session.controller';
import requireUser from './middleware/requireUser';
import { createFarmerSchema, deleteFarmerSchema, getFarmerSchema, updateFarmerSchema } from './Schema/farmer.schema';
import { createFarmerHandler, deleteFarmerHandler, getFarmerHandler, updateFarmerHandler } from './controller/farmer.controller';


function routes(app:Express){

    

    app.post("/api/users", validationResource(createUserSchema), createUserHandler)
    app.post("/api/session", validationResource(createSessionSchema), createUserSessionHandler)
    app.post("/api/session", requireUser ,getUserSessionsHandler)


    app.post("/api/farmer", [requireUser, validationResource(createFarmerSchema)], createFarmerHandler)
    app.put("/api/farmer", [requireUser, validationResource(updateFarmerSchema)], updateFarmerHandler)
    app.delete("/api/farmer", [requireUser, validationResource(deleteFarmerSchema)], deleteFarmerHandler)
    app.get("/api/farmer", validationResource(getFarmerSchema), getFarmerHandler)






}

export default routes;