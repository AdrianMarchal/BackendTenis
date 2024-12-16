const express = require('express')
const routes = require('./v1/routes/tenis_rutas')

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000

app.use("/api/v1/partidos", routes)


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))