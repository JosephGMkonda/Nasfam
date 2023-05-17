import {Express,Request,Response} from 'express'
import { createUserHandler } from './controller/user,controller';
import validationResource from './middleware/validationResource'
import {createUserSchema} from './Schema/user.schema' 
import { createUserSessionHandler } from './controller/session.controller';
import { createSessionSchema } from './Schema/session.schema';


function routes(app:Express){

    

    app.post("/api/users", validationResource(createUserSchema), createUserHandler)
    app.post("/api/session", validationResource(createSessionSchema), createUserSessionHandler)



}

export default routes;