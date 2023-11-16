import db from "../database/db.js";

import { DataTypes } from "sequelize";

const HorasModel = db.define('horas',{
    codtar: {type: DataTypes.INTEGER },
    fecha: {type: DataTypes.DATE},
    hora: {type: DataTypes.STRING},
    tipo: {type: DataTypes.STRING}
    },
    {tableName: 'in_horas'}
)
HorasModel.removeAttribute('createdAt')
HorasModel.removeAttribute('updatedAt')
export default HorasModel