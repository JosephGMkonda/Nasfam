import { Request, Response } from "express";
import { validatePassword } from "../service/user.service";
import { createSession } from "../service/session.service";
import { signJwt } from "../../utils/jwt.utils";
import config from 'config'

export async function createUserSessionHandler(req:Request, res:Response){
    //validate user password

    const user = await validatePassword(req.body)

    if(!user){
        return res.status(401).send("Invalid email or Password")
    }

    // creating session for the user
    const session = await createSession(user._id, req.get("user-agent") || "")

    //creating access token
    const accessToken = signJwt(
        {...user, session: session._id},
        {expiresIn: config.get("accessTokenTtl")}
    );

    //create refresh token
    const refreshToken = signJwt(
        {...user, session: session._id},
        {expiresIn: config.get("refreshTokenTtl")}
    );

    // returning accessToken and refreshToken
    return res.send({accessToken,refreshToken})

    

    
}