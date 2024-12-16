const express = require('express')
const routes = express.Router()
const tenisController = require("../../controller/tenisController")


routes.get("/", tenisController.getPartido)
routes.get("/finalizados", tenisController.getPartidosFinalizados)
routes.get("/pendientes", tenisController.getPartidosPendientes)
routes.patch("/:id" , tenisController.patchPartido)


module.exports = routes
