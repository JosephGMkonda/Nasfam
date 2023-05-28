import mongoose from 'mongoose'
import config from 'config'
import log from './logger'

async function connect(){

    const dbUrl = config.get<string>("DBUrl");

  

    await mongoose.connect(dbUrl)
    log.info("DB Connected")

  
  

}
export default connect;