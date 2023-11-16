import { Sequelize } from "sequelize"
import HorasModel from "../models/HorasModel.js" 

const  Op = Sequelize.Op

export const  Horas = async (req , res) => {
    try {
        const horas = await HorasModel.findAll ({
            where : {
                codtar : parseInt(req.params.codtar) ,                
            }
        })        
        res.json(horas)
    } catch (error) {
        res.json({message : error.message})
    }
}

export const  HorasFecha = async (req , res) => {
    try {
        const horas = await HorasModel.findAll ({
            where : {
                codtar : parseInt(req.params.codtar) ,
                fecha  : { 
                    [Op.gte] : new Date(req.params.fecha)
                }
            }
        })        
        res.json(horas)
    } catch (error) {
        res.json({message : error.message})
    }
}