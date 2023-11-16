import express from "express";
import cors  from "cors";
import db from "./database/db.js";
import horasRouter from './routes/horas/routes.js'
import personasRouter from './routes/personas/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/personas', personasRouter)
app.use('/horas', horasRouter)

try {
    await db.authenticate()
    console.log('Conectado')
} catch (error) {
    console.log(`No pudo conectar. Error ${error}`)
}


app.listen(8000, () => {
    console.log('Server up!')
})
