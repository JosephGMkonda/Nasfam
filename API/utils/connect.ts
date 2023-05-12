import mongoose from 'mongoose'
import config from 'config'
import log from './logger'

async function connect(){

    const dbUrl = config.get<string>("DBUrl");

  try{

    await mongoose.connect(dbUrl)
    log.info("DB Connected")

  }catch(err){
    log.info("Not Connected to db")
  }
  

}
export default connect;