import PersonasModel from "../models/EmpleadosModel.js";


export const Persona = async (req , res) => {
    try {
        const persona = await PersonasModel.findAll ({
            where : {legajo : parseInt(req.params.legajo) }
        })        
        res.json(persona)
    } catch (error) {
        res.json({message : error.message})
    }
}

export const PersonaxDepto = async (req , res) => {
    try {
        const persona = await PersonasModel.findAll ({
            where : {depto : parseInt(req.params.depto) }
        })        
        res.json(persona)
    } catch (error) {
        res.json({message : error.message})
    }
}