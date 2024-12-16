const adaptador = require('../dataBase/adaptadorTenis')

const getPartidosPendientes = async (req, res) => {
    try{
        const partidos = await adaptador.getPartidosPendientes()
        console.log(partidos)
        res.status(200).send({status: "OK", data: Object.fromEntries(partidos)})
    }catch(error){
        res.status(error.status || 500).send({status: "FAILED", message: error.message})
    }
}

const getPartidosFinalizados = async (req, res) => {
    try{
        const partidos = await adaptador.getPartidoFinalizados()
        console.log(partidos)
        res.status(200).send({status: "OK", data: Object.fromEntries(partidos)})
    }catch(error){
        res.status(error.status || 500).send({status: "FAILED", message: error.message})
    }
}

const getPartido = async (req, res) => {
    try{
        const partidos = await adaptador.getPartidoPendiente()
        console.log(partidos)
        res.status(200).send({status: "OK", data: partidos})
    }catch(error){
        res.status(error.status || 500).send({status: "FAILED", message: error.message})
    }
}

const patchPartido = async (req, res) => {
    const {
        body,
        params: { id },
      } = req
    
    try{
        const partidos = await adaptador.patchPartidoFinalizados(id,body)
        res.status(200).send({status: "OK", data: partidos})
    }catch(error){
        res.status(error.status || 500).send({status: "FAILED", message: error.message})
    }
}



module.exports = {
    getPartidosPendientes,
    getPartidosFinalizados,
    getPartido,
    patchPartido
}