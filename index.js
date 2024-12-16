const express = require('express')
const routes = require('./v1/routes/tenis_rutas')
const cors = require('cors')

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000
// Configurar CORS
app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
  }))

app.use("/api/v1/partidos", routes)


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))