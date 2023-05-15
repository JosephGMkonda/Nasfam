import {Express,Request,Response} from 'express'
import { createUserHandler } from './controller/user,controller';
import validationResource from './middleware/validationResource'
import {createUserSchema} from './Schema/user.schema' 


function routes(app:Express){

    app.get("/healthcheck",(req: Request,res: Response) => res.sendStatus(200));

    app.post("/api/users", validationResource(createUserSchema), createUserHandler)



}

export default routes;