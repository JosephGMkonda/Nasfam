import express from 'express'
import config from 'config'
import connect from '../utils/connect'
import log from '../utils/logger'

const port = config.get<number>('port')

const app = express()

app.listen(port, async () => {
    log.info(`App is running at http://localhost:${port}`)
    await connect();
})