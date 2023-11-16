import db from "../database/db.js";

import { DataTypes } from "sequelize";

const PersonasModel = db.define('persona',{
    legajo: {type: DataTypes.INTEGER },
    nombre: {type: DataTypes.STRING},
    categoria: {type: DataTypes.INTEGER},
    depto: {type: DataTypes.INTEGER},
    sexo: {type: DataTypes.INTEGER},
    sexo: {type: DataTypes.INTEGER},
    tarjeta : {type: DataTypes.INTEGER},
    fechabaj : {type: DataTypes.DATE},
    claveweb : {type: DataTypes.STRING}
    },
    {tableName: 'in_maestro'}
)
PersonasModel.removeAttribute('id')
PersonasModel.removeAttribute('createdAt')
PersonasModel.removeAttribute('updatedAt')
export default PersonasModel