import jwt from 'jsonwebtoken'
import config from 'config'


const privatekey = config.get("privatekey");
const publickey = config.get("publickey")

export function signJwt(object: object,options?: jwt.SignOptions | undefined){
              
    return jwt.sign(object, privatekey, {
        ...(options && options),
        algorithm: "RS256"
    })

}

export function verifyJwt(token: string){
    try{

        const decoded = jwt.verify(token,publickey)
        return{
            valid: true,
            expired: false,
            decoded,

        }

    }catch(e: any){
        return{
            valid: false,
            expired: e.message === "jwt expired",
            decoded: null
        }

    }

}